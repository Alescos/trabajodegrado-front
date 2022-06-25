/* eslint-disable object-curly-newline */
export default function authHeader() {
  const userStr = localStorage.getItem('user');
  let user = null;
  let token = '';
  if (userStr) user = JSON.parse(userStr);
  if (user && user.token) {
    token = `Bearer ${user.token}`;
    return token;
  }
  return token;
}
