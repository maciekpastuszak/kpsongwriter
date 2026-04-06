import logoImage from 'figma:asset/722b2a009c8b0336e686786bdf25feec8f2e9d61.png';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
}

export function Logo({ className = '', size = 'md' }: LogoProps) {
  const sizes = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-32 h-32',
    xl: 'w-48 h-48',
    '2xl': 'w-96 h-96',
    '3xl': 'w-[768px] h-[768px]'
  };

  return (
    <div className={`${sizes[size]} ${className} relative`}>
      <img 
        src={logoImage} 
        alt="KMP Logo" 
        className="w-full h-full object-contain drop-shadow-[0_0_10px_rgba(255,140,66,0.4)]"
      />
    </div>
  );
}