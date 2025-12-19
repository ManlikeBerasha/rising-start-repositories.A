import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };
  props: any;

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-brand-blue flex items-center justify-center px-4">
          <div className="max-w-md w-full text-center">
            <div className="bg-white rounded-lg shadow-xl p-8">
              <div className="text-6xl mb-4">⚠️</div>
              <h1 className="text-2xl font-bold text-brand-blue mb-4">
                Oops! Something went wrong
              </h1>
              <p className="text-gray-600 mb-6">
                We're sorry, but something unexpected happened. Please try refreshing the page.
              </p>
              <button
                onClick={() => window.location.reload()}
                className="bg-brand-gold text-brand-blue font-bold py-3 px-6 rounded-md hover:opacity-90 transition-opacity"
              >
                Refresh Page
              </button>
              <div className="mt-6 text-sm text-gray-500">
                <p>If the problem persists, please contact us:</p>
                <a 
                  href="mailto:patriciaj.mahinda@yahoo.com" 
                  className="text-brand-blue hover:underline"
                >
                  patriciaj.mahinda@yahoo.com
                </a>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
