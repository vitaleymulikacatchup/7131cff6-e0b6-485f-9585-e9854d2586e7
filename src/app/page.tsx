// 'use client'
import NavbarLayoutFloatingInline from '@/components/navigation/NavbarLayoutFloatingInline';
import BillboardHero from '@/components/sections/layouts/hero/BillboardHero';
import SplitAbout from '@/components/sections/layouts/about/SplitAbout';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/StepCards2D';
import TextGridTokenomics from '@/components/sections/layouts/tokenomics/TextGridTokenomics';
import CentralFAQ from '@/components/sections/layouts/faq/CentralFAQ';
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: 'futuristicAndOutOfBox', colorTemplate: 2, textAnimation: 'slide' }}>
      <NavbarLayoutFloatingInline
        logoSrc="/images/logo.svg"
        logoHeight={40}
        logoWidth={40}
        navItems={[
          { name: '#hero', id: 'hero' },
          { name: '#about', id: 'about' },
          { name: '#how-to-buy', id: 'how-to-buy' },
          { name: '#tokenomics', id: 'tokenomics' },
          { name: '#footer', id: 'footer' },
        ]}
        buttonText="Book a Shoot"
        onButtonClick={() => alert('Booking!')}
      />
      <BillboardHero
        title="Futuristic Photography Portfolio"
        subtitle="Capturing the beauty of the future - one snap at a time."
      />
      <SplitAbout
        heading="About PhotonFlux"
        body="We are dedicated to creating stunning, immersive imagery that takes you beyond the ordinary and into the future with photorealistic precision and bold creativity."
      />
      <HowToBuy2D
        heading="How to Book Your Shoot"
        items={[
          { icon: 'calendar', title: 'Select a Date', description: 'Choose a time that works for you to meet and discuss your vision.' },
          { icon: 'camera', title: 'Choose Your Style', description: 'Decide on the theme and mood of your shoot.' },
          { icon: 'check-circle', title: 'Confirm Your Booking', description: 'Secure your spot in our schedule.' },
        ]}
      />
      <TextGridTokenomics
        title="Our Commitment to Quality"
        description="We uphold the highest standards in production, ensuring every frame captures the essence of your vision."
        tokenData={[
          { value: '100%', description: 'Satisfaction Guaranteed' },
          { value: '24/7', description: 'Support Availability' },
          { value: '3', description: 'Days for Turnaround' },
        ]}
      />
      <CentralFAQ
        items={[
          { title: 'What services do you offer?', content: 'We provide a variety of photography services, including portraits, events, and commercial shoots.' },
          { title: 'How do I book a shoot?', content: 'Simply click on the Book a Shoot button and follow the instructions.' },
          { title: 'Can I choose the location?', content: 'Yes! We can shoot at your preferred location or suggest stunning locales.' },
        ]}
      />
    </SiteThemeProvider>
  );
}