import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { useAssets, useWallet } from '@meshsdk/midnight-react';
import ConnectedButton from './connected-button';
import { screens } from './data';
import ScreenMain from './screen-main';

export const CardanoWallet = () => {  
  const { open, setOpen } = useWallet();
  const [screen, setScreen] = useState('main');
  const { hasConnectedWallet } = useAssets();

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <div>
        {!hasConnectedWallet ? (
          <DialogTrigger asChild>
            <button className="mesh-w-[140px] hover:mesh-text-[#D28C13]">Connect Wallet</button>
          </DialogTrigger>
        ) : (
          <ConnectedButton />
        )}
      </div>

      <DialogContent className="sm:mesh-max-w-[425px] mesh-dark" onOpenAutoFocus={(event) => event.preventDefault()}>
        <Header screen={screen} setScreen={setScreen} />
        {screen == 'main' && <ScreenMain setOpen={setOpen} />}
        <Footer />
      </DialogContent>
    </Dialog>
  );
};

// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
function Header({ screen, setScreen }: { screen: string; setScreen: Function }) {
  return (
    <DialogHeader>
      <DialogTitle className="mesh-flex mesh-justify-between">
        <span style={{ width: '24px' }}></span>
        <span className='mesh-text-white'>
          {/* @ts-expect-error any type */}
          {screens[screen].title}
        </span>
        <span style={{ width: '24px' }}></span>
      </DialogTitle>   
    </DialogHeader>
  );
}

function Footer() {
  return (
    <DialogFooter className="mesh-justify-center mesh-text-sm">
      <a
        href="https://meshjs.dev/"
        target="_blank"
        className="mesh-grow mesh-flex mesh-gap-1 mesh-items-center mesh-justify-center mesh-text-zinc-500 hover:mesh-text-white mesh-fill-zinc-500 hover:mesh-fill-white"
      >
        <span className="">Powered by</span>
        <svg width={24} height={24} enableBackground="new 0 0 300 200" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
          <path d="m289 127-45-60-45-60c-.9-1.3-2.4-2-4-2s-3.1.7-4 2l-37 49.3c-2 2.7-6 2.7-8 0l-37-49.3c-.9-1.3-2.4-2-4-2s-3.1.7-4 2l-45 60-45 60c-1.3 1.8-1.3 4.2 0 6l45 60c.9 1.3 2.4 2 4 2s3.1-.7 4-2l37-49.3c2-2.7 6-2.7 8 0l37 49.3c.9 1.3 2.4 2 4 2s3.1-.7 4-2l37-49.3c2-2.7 6-2.7 8 0l37 49.3c.9 1.3 2.4 2 4 2s3.1-.7 4-2l45-60c1.3-1.8 1.3-4.2 0-6zm-90-103.3 32.5 43.3c1.3 1.8 1.3 4.2 0 6l-32.5 43.3c-2 2.7-6 2.7-8 0l-32.5-43.3c-1.3-1.8-1.3-4.2 0-6l32.5-43.3c2-2.7 6-2.7 8 0zm-90 0 32.5 43.3c1.3 1.8 1.3 4.2 0 6l-32.5 43.3c-2 2.7-6 2.7-8 0l-32.5-43.3c-1.3-1.8-1.3-4.2 0-6l32.5-43.3c2-2.7 6-2.7 8 0zm-53 152.6-32.5-43.3c-1.3-1.8-1.3-4.2 0-6l32.5-43.3c2-2.7 6-2.7 8 0l32.5 43.3c1.3 1.8 1.3 4.2 0 6l-32.5 43.3c-2 2.7-6 2.7-8 0zm90 0-32.5-43.3c-1.3-1.8-1.3-4.2 0-6l32.5-43.3c2-2.7 6-2.7 8 0l32.5 43.3c1.3 1.8 1.3 4.2 0 6l-32.5 43.3c-2 2.7-6 2.7-8 0zm90 0-32.5-43.3c-1.3-1.8-1.3-4.2 0-6l32.5-43.3c2-2.7 6-2.7 8 0l32.5 43.3c1.3 1.8 1.3 4.2 0 6l-32.5 43.3c-2 2.7-6 2.7-8 0z" />
        </svg>
        <span className="">Mesh SDK</span>
      </a>
    </DialogFooter>
  );
}
