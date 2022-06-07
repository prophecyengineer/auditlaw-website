/* eslint-disable import/no-anonymous-default-export */
// hashes password
import bcrypt from 'bcrypt'
// JWT token to store info about user, user permissions, etc.
import jwt from 'jsonwebtoken'
// store memory in browser session
import cookie from 'cookie'
import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../lib/prisma'

// this is a serverless function (a function exectuted by some event)
// function will start up and then shut down when the event is triggered

// user sends us email and pass, we attempt to create new user in db 
// if user exists, we return error
// if successful we retrieve a cookie, the cookie is sent on every other request to verify user 
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const salt = bcrypt.genSaltSync()
  const { email, password, username } = req.body

  let user: { email: any; id: any; first_name?: string; last_name?: string; username?: string; password?: string; city?: string; state?: string; image?: string; resetPasswordToken?: string; resetPasswordExpires?: Date; createdAt?: Date; updatedAt?: Date }

  try {
    user = await prisma.users.create({
      data: {
        username,
        email,
        password: bcrypt.hashSync(password, salt),
      },
    })
  } catch (e) {
    res.status(401)
    res.json({ error: 'User already exists' })
    return
  }

  // the object that you want to hash
  const token = jwt.sign(
    {
      email: user.email,
      id: user.id,
      time: Date.now(),
    },
    'hello',
    { expiresIn: '8h' }
  )

  // set jwt on a cookie, gets set into the persons browser -not local storage
  res.setHeader(
    'Set-Cookie',
    cookie.serialize('TRAX_ACCESS_TOKEN', token, {
      httpOnly: true,
      maxAge: 8 * 60 * 60,
      path: '/',
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
    })
  )

  res.json(user)
}
