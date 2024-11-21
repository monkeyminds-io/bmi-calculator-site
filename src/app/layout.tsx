// =============================================================================
// File Name: Main Layout
// File Description:
// This file contains the main layout of the website.
// =============================================================================
// =============================================================================
// Layout Imports
// =============================================================================
import { Metadata } from 'next'
import { ReactNode } from 'react';

// =============================================================================
// Layout Props
// =============================================================================
type Props = {
  children: ReactNode;
}

// =============================================================================
// Layout Metadata
// =============================================================================
export const metadata: Metadata = {
  title: {
    template: '%s | Body Mass Index Calculator',
    default: 'Frontend Mentor',
  },
  description: 'This is a solution to the Body Mass Index Calculator challenge on Frontend Mentor. Frontend Mentor challenges help you improve your coding skills by building realistic projects.',
}

// =============================================================================
// Layout Component
// =============================================================================
export const Layout = ({ children }: Props) => {
return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
