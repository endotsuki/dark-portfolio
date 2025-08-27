import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { IconArrowLeft } from '@tabler/icons-react';

export default function NotFound() {
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  
  const terminalText = `$ ls -la /page-not-found
total 0
drwxr-xr-x  2 user user   4096 ${new Date().toDateString()}
-rw-r--r--  1 user user      0 ${new Date().toDateString()} 404.html

$ cat 404.html
ERROR 404: PAGE NOT FOUND

The page you are looking for does not exist.
Perhaps it was moved, deleted, or you entered the wrong URL.

$ whoami
lost_visitor

$ pwd
/nowhere

$ echo "Don't worry, we can help you find your way back!"
Don't worry, we can help you find your way back!`;

  useEffect(() => {
    let currentIndex = 0;
    const typeText = () => {
      if (currentIndex < terminalText.length) {
        setText(terminalText.slice(0, currentIndex + 1));
        currentIndex++;
        setTimeout(typeText, 10);
      }
    };
    
    typeText();

    // Cursor blinking effect
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 600);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <div className="bg-gray-900 rounded-lg border border-gray-700 p-6 shadow-2xl">
          {/* Terminal Header */}
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-700">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="text-gray-400 text-sm">Terminal - 404 Error</div>
          </div>
          
          {/* Terminal Content */}
          <div className="space-y-2">
            <pre className="whitespace-pre-wrap text-sm leading-relaxed">
              {text}
              {showCursor && <span className="bg-green-400">_</span>}
            </pre>
          </div>
          
          {/* Navigation */}
          <div className="mt-8 pt-6 border-t border-gray-700">
            <div className="text-green-400 mb-4">
              $ navigate --help
            </div>
            <div className="space-y-3">
              <div className="text-gray-300">Available commands:</div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  asChild
                  className="bg-green-600 hover:bg-green-700 text-black font-mono"
                >
                  <Link to="/">
                    <IconArrowLeft className="mr-2 h-4 w-4" />
                    cd /home
                  </Link>
                </Button>
                <Button 
                  variant="outline"
                  className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black font-mono"
                  onClick={() => window.history.back()}
                >
                  cd ../
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Additional Info */}
        <div className="mt-6 text-center text-gray-500 text-sm">
          <p>If you believe this is an error, please contact support.</p>
        </div>
      </div>
    </div>
  );
}
