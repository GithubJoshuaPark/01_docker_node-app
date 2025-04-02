| Goal                          | Command                                      |
|-------------------------------|----------------------------------------------|
| Run in the background (basic) | `nohup node server.js > output.log 2>&1 &`  |
| Run in the background (better)| `pm2 start server.js --name my-app`         |
| Auto-reload on changes        | `nodemon server.js`                         |
| Best practice (pm2 + nodemon) | `pm2 start nodemon --name my-app -- server.js` |
| Stop service                  | `pm2 stop my-app`                           |
| Restart service               | `pm2 restart my-app`                        |
| Show running processes        | `pm2 list`                                  |
| Show logs                     | `pm2 logs my-app`                           |
| Show specific log             | `pm2 logs my-app --lines 100`               |
| Show all logs                 | `pm2 logs`                                  |
| Show specific log file        | `pm2 logs my-app --lines 100 --raw`         |
| Show all log files            | `pm2 logs --raw`                            |
| Show all log files (json)     | `pm2 logs --json`                           |
| Delete my-app                 | `pm2 delete my-app`                         |
| Auto-start on reboot          | `pm2 startup`                               |

Now your Node.js service will run in the background and automatically reload when you modify the code! 🚀