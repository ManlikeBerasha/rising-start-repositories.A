# Contributing to Raisers of Stars Consulting

Thank you for your interest in contributing to our project! This document provides guidelines for contributing.

## 📋 Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Focus on what is best for the community

## 🚀 Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/yourusername/raisers-of-stars-consulting.git`
3. Create a new branch: `git checkout -b feature/your-feature-name`
4. Make your changes
5. Test your changes thoroughly
6. Commit your changes: `git commit -m "Add: your feature description"`
7. Push to your fork: `git push origin feature/your-feature-name`
8. Create a Pull Request

## 💻 Development Guidelines

### Code Style

- Use TypeScript for all new files
- Follow existing code formatting
- Use meaningful variable and function names
- Add comments for complex logic
- Keep components small and focused

### Component Structure

```tsx
import React from 'react';

interface ComponentProps {
  // Define props here
}

export const Component: React.FC<ComponentProps> = ({ props }) => {
  // Component logic
  
  return (
    // JSX
  );
};
```

### CSS Guidelines

- Use modular CSS files in `src/styles/`
- Follow BEM naming convention for custom classes
- Use Tailwind utility classes where appropriate
- Keep animations smooth and performant
- Test on multiple screen sizes

### Commit Messages

Use conventional commit format:
- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

Example: `feat: add contact form validation`

## 🧪 Testing

- Test your changes on multiple browsers
- Test responsive design on different screen sizes
- Verify accessibility features work correctly
- Check for console errors

## 📝 Pull Request Process

1. Update the README.md with details of changes if needed
2. Ensure your code follows the project's style guidelines
3. Make sure all tests pass
4. Update documentation as necessary
5. Request review from maintainers

## 🐛 Reporting Bugs

When reporting bugs, please include:
- Clear description of the issue
- Steps to reproduce
- Expected behavior
- Actual behavior
- Screenshots if applicable
- Browser and OS information

## 💡 Suggesting Features

We welcome feature suggestions! Please:
- Check if the feature has already been suggested
- Provide a clear description of the feature
- Explain why it would be useful
- Include mockups or examples if possible

## 📞 Questions?

If you have questions, feel free to:
- Open an issue
- Contact us at patriciaj.mahinda@yahoo.com

Thank you for contributing! 🙏
