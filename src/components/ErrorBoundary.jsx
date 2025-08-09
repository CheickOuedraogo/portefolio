import React from "react";

class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-6 bg-red-100 text-red-700 rounded-lg max-w-4xl mx-auto my-8">
          <h2 className="text-2xl font-semibold">Une erreur s'est produite</h2>
          <p>Veuillez recharger la page ou vérifier votre code.</p>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
