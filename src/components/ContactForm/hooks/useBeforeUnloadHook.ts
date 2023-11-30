import { useEffect } from 'react';

function useBeforeUnloadHook(hasUnsavedChanges: boolean) {
  useEffect(() => {
    console.log('useBeforeUnload used!');
    const beforeUnloadHandler = (event: BeforeUnloadEvent) => {
      if (hasUnsavedChanges) {
        event.preventDefault();
        event.returnValue = '';
      }
    };

    window.addEventListener('beforeunload', beforeUnloadHandler);

    return () => {
      window.removeEventListener('beforeunload', beforeUnloadHandler);
    };
  }, [hasUnsavedChanges]);
}

export default useBeforeUnloadHook;
