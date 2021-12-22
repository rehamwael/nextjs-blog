module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '1185d5efc0b5b6b4826372fc9f3759b0'),
  },
});
