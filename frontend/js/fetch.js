fetch('http://localhost:63342/web/frontend/pages/login.html?_ijt=uchs5ei08991g4pqqmimvm6a0r&_ij_reload=RELOAD_ON_SAVE', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username: '123', password: '123' }),
})
    .then(response => response.json())
    .then(data => {
        console.log('认证令牌：', data.token);
    })
    .catch(error => {
        console.error('登录失败：', error);
    });
