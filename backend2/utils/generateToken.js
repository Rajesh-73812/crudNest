// const jwt = require('jsonwebtoken');
// const crypto = require('crypto');
// const RefreshToken = require('../models/RefreshToken');

// const generateTokens = async (user) => {
//   try {
//     // Generate access token
//     const accessToken = jwt.sign(
//       {
//         userId: user._id,
//         username: user.username,
//       },
//       process.env.JWT_SECRET,
//       { expiresIn: '15m' } // Set to 15 minutes
//     );

//     // Generate refresh token
//     const refreshToken = crypto.randomBytes(40).toString('hex');
//     const expiresAt = new Date();
//     expiresAt.setDate(expiresAt.getDate() + 7); // Set expiry to 7 days

//     // Store the refresh token in the database
//     await RefreshToken.create({
//       token: refreshToken,
//       user: user._id,
//       expiresAt,
//     });

//     return { accessToken, refreshToken };
//   } catch (error) {
//     console.error('Error generating tokens:', error);
//     throw new Error('Token generation failed');
//   }
// };

// module.exports = generateTokens;


const jwt = require('jsonwebtoken');

const generateTokens = (user) => {
  const accessToken = jwt.sign(
    { id: user._id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: '15m' } // Access token expires in 15 minutes
  );

  const refreshToken = jwt.sign(
    { id: user._id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: '7d' } // Refresh token expires in 7 days
  );

  return { accessToken, refreshToken };
};

module.exports = { generateTokens };
