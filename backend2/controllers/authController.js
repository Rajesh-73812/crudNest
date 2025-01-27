// const RefreshToken = require('../models/RefreshToken');
// const User = require('../models/User');
// const generateTokens = require('../utils/generateToken');

// const register = async (req, res) => {
//   const {username, email, password } = req.body;
//   console.log(req.body)
//   try {
//     // Check if the user already exists
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({
//         success: false,
//         message: 'email already exists.',
//       });
//     }

//     // Create a new user
//     const newUser = new User({ username,email, password });
//     await newUser.save();

//     // Generate tokens
//     const { accessToken, refreshToken } = await generateTokens(newUser);

//     res.status(201).json({
//       success: true,
//       message: 'New user created!',
//       accessToken,
//       refreshToken,
//     });
//   } catch (err) {
//     console.error('Error registering user:', err);
//     res.status(500).json({
//       success: false,
//       message: 'Error registering user.',
//     });
//   }
// };

// const login = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     // Find user by email
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(401).json({
//         success: false,
//         message: 'Invalid email or password.',
//       });
//     }

//     // Compare passwords using the model method
//     const isPasswordValid = await user.comparePassword(password);
//     if (!isPasswordValid) {
//       return res.status(401).json({
//         success: false,
//         message: 'Invalid email or password.',
//       });
//     }

//     // Generate tokens
//     const { accessToken, refreshToken } = await generateTokens(user);

//     // Set refresh token as an HTTP-only cookie
//     res.cookie('refreshToken', refreshToken, {
//       httpOnly: true,
//       secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
//       sameSite: 'strict',
//       maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
//     });

//     // Respond with the access token
//     res.status(200).json({
//       success: true,
//       message: 'Login successful!',
//       accessToken,
//       refreshToken,
//       userId: user._id,
//     });
//   } catch (err) {
//     console.error('Error logging in:', err);
//     res.status(500).json({
//       success: false,
//       message: 'Error logging in.',
//     });
//   }
// };


// const refreshTokenUser = async (req, res) => {
//   // const { refreshToken } = req.cookies; ->comment
//   const { refreshToken } = req.body;

//   if (!refreshToken) return res.status(401).send('No refresh token provided');

//   try {
//     const storedToken = await RefreshToken.findOne({ token:refreshToken });
//     if (!storedToken || storedToken.expiresAt < new Date()) return res.status(403).send('Invalid refresh token');

//     const user=await User.findById(storedToken.user)
//     if(!user) return res.status(401).send('user not found');

//     const {accessToken:newAccessToken,refreshToken:newRefreshToken}=await generateTokens(user)
//     await RefreshToken.deleteOne({_id:storedToken._id})
//     res.json({
//       accessToken:newAccessToken,
//       refreshToken:newRefreshToken
//     })

//     // jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
//     //   if (err) return res.status(403).send('Invalid refresh token');
//     //   const newAccessToken = generateAccessToken(user);
//     //   res.json({ accessToken: newAccessToken });
//     // });
//   } catch (err) {
//     res.status(500).send('Error refreshing token');
//   }
// };

// const logout = async (req, res) => {
//   const { refreshToken } = req.body;

//   try {
//     if (!refreshToken) {
//       return res.status(400).json({
//         success: false,
//         message: 'No refresh token provided.',
//       });
//     }

//     // Remove the refresh token from the database
//     const deletedToken = await RefreshToken.findOneAndDelete({ token: refreshToken });
//     if (!deletedToken) {
//       return res.status(404).json({
//         success: false,
//         message: 'Refresh token not found.',
//       });
//     }

//     // Optionally clear the cookie if used
//     res.clearCookie('refreshToken', {
//       httpOnly: true,
//       secure: process.env.NODE_ENV === 'production', // Only for production
//       sameSite: 'strict',
//     });

//     res.status(200).json({
//       success: true,
//       message: 'Logged out successfully.',
//     });
//   } catch (err) {
//     console.error('Error logging out:', err);
//     res.status(500).json({
//       success: false,
//       message: 'Error logging out.',
//     });
//   }
// };


// module.exports = { register, login,refreshTokenUser ,logout};


const User = require('../models/User');
const { generateTokens } = require('../utils/generateToken');
const jwt = require('jsonwebtoken');

// Register a new user
const register = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already exists.' });
    }

    const newUser = new User({ username, email, password });
    await newUser.save();

    const { accessToken, refreshToken } = await generateTokens(newUser);

    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    res.status(201).json({
      message: 'User created successfully!',
      accessToken,
      refreshToken,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Error registering user.' });
  }
};

// Login a user
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ message: 'Invalid email or password.' });

    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) return res.status(401).json({ message: 'Invalid email or password.' });

    const { accessToken, refreshToken } = await generateTokens(user);

    console.log('Setting refresh token cookie...');
res.cookie('refreshToken', refreshToken, {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'strict',
  maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
});


    res.status(200).json({
      message: 'Login successful!',
      accessToken,
      refreshToken,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Error logging in.' });
  }
};

// Refresh access token
const refreshToken = async (req, res) => {
  const refreshToken = req.cookies.refreshToken;

  if (!refreshToken) {
    return res.status(401).json({ message: 'Refresh token missing.' });
  }

  try {
    const decoded = jwt.verify(refreshToken, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);
    if (!user) return res.status(401).json({ message: 'User not found.' });

    const { accessToken, refreshToken: newRefreshToken } = await generateTokens(user);

    res.cookie('refreshToken', newRefreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    res.status(200).json({
      accessToken,
      refreshToken: newRefreshToken,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Error refreshing token.' });
  }
};

module.exports = { register, login, refreshToken };
