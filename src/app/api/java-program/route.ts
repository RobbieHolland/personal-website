import { NextResponse } from 'next/server';
import { spawn } from 'child_process';
import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', (ws) => {
  const javaProcess = spawn('java', ['-jar', 'path/to/your/program.jar']);

  javaProcess.stdout.on('data', (data) => {
    ws.send(data.toString());
  });

  javaProcess.stderr.on('data', (data) => {
    console.error(`Java program error: ${data}`);
  });

  ws.on('message', (message) => {
    javaProcess.stdin.write(message);
  });

  ws.on('close', () => {
    javaProcess.kill();
  });
});

export async function POST(request: Request) {
  try {
    const { command } = await request.json();
    
    // Here you would send the command to your Java program
    // and return the response
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error running Java program:', error);
    return NextResponse.json(
      { error: 'Failed to run Java program' },
      { status: 500 }
    );
  }
} 