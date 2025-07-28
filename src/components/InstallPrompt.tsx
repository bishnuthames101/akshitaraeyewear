import React from 'react';
import { Download, X } from 'lucide-react';
import { usePWA } from '../hooks/usePWA';

export default function InstallPrompt() {
  const { isInstallable, installApp } = usePWA();
  const [showPrompt, setShowPrompt] = React.useState(false);

  React.useEffect(() => {
    if (isInstallable) {
      // Show prompt after a delay to not be intrusive
      const timer = setTimeout(() => setShowPrompt(true), 3000);
      return () => clearTimeout(timer);
    }
  }, [isInstallable]);

  if (!showPrompt || !isInstallable) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:max-w-sm bg-white rounded-lg shadow-lg border border-gray-200 p-3 sm:p-4 z-50">
      <div className="flex items-start gap-2 sm:gap-3">
        <div className="flex-shrink-0">
          <Download className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900 text-sm sm:text-base">
            Install Asia Eye Care
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 mt-1">
            Install our app for a better experience with offline access and faster loading.
          </p>
          <div className="flex gap-2 mt-2 sm:mt-3">
            <button
              onClick={installApp}
              className="bg-blue-600 text-white px-3 py-1.5 rounded text-xs sm:text-sm font-medium hover:bg-blue-700 transition-colors"
            >
              Install
            </button>
            <button
              onClick={() => setShowPrompt(false)}
              className="text-gray-500 hover:text-gray-700 px-3 py-1.5 rounded text-xs sm:text-sm transition-colors"
            >
              Not now
            </button>
          </div>
        </div>
        <button
          onClick={() => setShowPrompt(false)}
          className="flex-shrink-0 text-gray-400 hover:text-gray-600"
        >
          <X className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>
      </div>
    </div>
  );
}