import { v4 } from 'uuid'

import { getVerificationTokenByToken } from '@/data/verification-token'
import { db } from './db'

export const generateVerificationToken = async (email: string) => {
  const token = v4()
  const expires = new Date(new Date().getTime() + 3600 * 1000)

  const existingToken = await getVerificationTokenByToken(email)
  if (existingToken) {
    await db.verificationToken.delete({
      where: {
        id: existingToken.id
      }
    })
  }

  const verificationToken = await db.verificationToken.create({
    data: {
      email,
      token,
      expires
    }
  })

  return verificationToken
}
