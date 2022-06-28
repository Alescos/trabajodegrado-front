/* eslint-disable object-curly-newline */
function authHeader() {
  const userStr = sessionStorage.getItem('user');
  let user = null;
  let token = '';
  if (userStr) user = JSON.parse(userStr);
  if (user && user.token) {
    token = `Bearer ${user.token}`;
    return token;
  }
  return token;
}
export default authHeader;
