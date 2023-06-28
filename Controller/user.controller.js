const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient()
const getUser = async (req, res) => {
  try {
    const user  = await prisma.user.findMany();
    res.status(200).json({
      msg: "Data found",
      result: user
    })
  } catch (error) {
    res.status(500).json({
      msg: "Internal server error",
      error
    })
  }

}

module.exports = { getUser }