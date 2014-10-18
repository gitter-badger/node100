"use strict";
require('traceur-source-maps').install(require('traceur'));
var net = require('net');
var server = net.createServer((function(socket) {
  socket.write('Echo server\r\n');
  socket.pipe(socket);
}));
server.listen(1337, '127.0.0.1');

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludHJvX2hlbGxvdGNwLmVzNi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBLE1BQU0sQUFBQyxDQUFDLHFCQUFvQixDQUFDLFFBQVEsQUFBQyxDQUFDLE9BQU0sQUFBQyxDQUFDLFNBQVEsQ0FBQyxDQUFDLENBQUM7RUFBSyxDQUFBLEdBQUUsRUFBSSxDQUFBLE9BQU0sQUFBQyxDQUFDLEtBQUksQ0FBQztFQUU5RSxDQUFBLE1BQUssRUFBSSxDQUFBLEdBQUUsYUFBYSxBQUFDLEVBQUMsU0FBQSxNQUFLLENBQUs7QUFDdEMsT0FBSyxNQUFNLEFBQUMsQ0FBQyxpQkFBZ0IsQ0FBQyxDQUFDO0FBQy9CLE9BQUssS0FBSyxBQUFDLENBQUMsTUFBSyxDQUFDLENBQUM7QUFDckIsRUFBQztBQUVELEtBQUssT0FBTyxBQUFDLENBQUMsSUFBRyxDQUFHLFlBQVUsQ0FBQyxDQUFDO0FBQUEiLCJmaWxlIjoiaW50cm9faGVsbG90Y3AuanMiLCJzb3VyY2VzQ29udGVudCI6WyJyZXF1aXJlKCd0cmFjZXVyLXNvdXJjZS1tYXBzJykuaW5zdGFsbChyZXF1aXJlKCd0cmFjZXVyJykpO2xldCBuZXQgPSByZXF1aXJlKCduZXQnKTtcblxubGV0IHNlcnZlciA9IG5ldC5jcmVhdGVTZXJ2ZXIoc29ja2V0ID0+IHtcbiAgc29ja2V0LndyaXRlKCdFY2hvIHNlcnZlclxcclxcbicpO1xuICBzb2NrZXQucGlwZShzb2NrZXQpO1xufSk7XG5cbnNlcnZlci5saXN0ZW4oMTMzNywgJzEyNy4wLjAuMScpOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==