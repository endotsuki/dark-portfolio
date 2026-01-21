import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { HugeiconsIcon } from '@hugeicons/react';
import { ArrowLeft02Icon } from '@hugeicons/core-free-icons';

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
      setShowCursor((prev) => !prev);
    }, 600);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className='flex min-h-screen items-center justify-center bg-black p-4 font-mono text-green-400'>
      <div className='w-full max-w-4xl'>
        <div className='rounded-lg border border-gray-700 bg-gray-900 p-6 shadow-2xl'>
          {/* Terminal Header */}
          <div className='mb-4 flex items-center justify-between border-b border-gray-700 pb-3'>
            <div className='flex items-center space-x-2'>
              <div className='h-3 w-3 rounded-full bg-red-500'></div>
              <div className='h-3 w-3 rounded-full bg-yellow-500'></div>
              <div className='h-3 w-3 rounded-full bg-green-500'></div>
            </div>
            <div className='text-sm text-gray-400'>Terminal - 404 Error</div>
          </div>

          {/* Terminal Content */}
          <div className='space-y-2'>
            <pre className='whitespace-pre-wrap text-sm leading-relaxed'>
              {text}
              {showCursor && <span className='bg-green-400'>_</span>}
            </pre>
          </div>

          {/* Navigation */}
          <div className='mt-8 border-t border-gray-700 pt-6'>
            <div className='mb-4 text-green-400'>$ navigate --help</div>
            <div className='space-y-3'>
              <div className='text-gray-300'>Available commands:</div>
              <div className='flex flex-col gap-4 sm:flex-row'>
                <Button asChild className='bg-green-600 font-mono text-black hover:bg-green-700'>
                  <Link href='/'>
                    <HugeiconsIcon icon={ArrowLeft02Icon} size={23} />
                    cd /home
                  </Link>
                </Button>
                <Button
                  variant='outline'
                  className='border-green-400 font-mono text-green-400 hover:bg-green-400 hover:text-black'
                  onClick={() => window.history.back()}
                >
                  cd ../
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className='mt-6 text-center text-sm text-gray-500'>
          <p>If you believe this is an error, please contact support.</p>
        </div>
      </div>
    </div>
  );
}
