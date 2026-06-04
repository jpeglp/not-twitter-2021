import { useEffect } from 'react';
import { useModal } from '@lib/hooks/useModal';
import { Button } from '@components/ui/button';
import { NextImage } from '@components/ui/next-image';
import { Modal } from '@components/modal/modal';
import { ImageModal } from '@components/modal/image-modal';
import type { ImageData } from '@lib/types/file';

type UserHomeAvatarProps = {
  profileData?: ImageData | null;
};

export function UserHomeAvatar({
  profileData
}: UserHomeAvatarProps): JSX.Element {
  const { open, openModal, closeModal } = useModal();

  // attempt to replace bsky banner
  useEffect(() => {
    if (!profileData?.src) return;

    const targetURL =
      'https://cdn.bsky.app/img/banner/plain/did:plc:z72i7hdynmk6r22z27h6tvur/bafkreichzyovokfzmymz36p5jibbjrhsur6n7hjnzxrpbt5jaydp2s';

    const replacementURL = 'https://jpeglp.github.io/not-twitter-2021/assets/twitter-banner.png'; // your local image

    if (profileData.src === targetURL) {
      profileData.src = replacementURL;
    }
  }, [profileData]);

  return (
    <div className='mb-8 xs:mb-14 sm:mb-16'>
      <Modal
        className='!overflow-hidden !p-0'
        modalClassName='h-screen w-screen'
        open={open}
        closeModal={closeModal}
        closePanelOnClick
      >
        <ImageModal
          imageData={
            { src: profileData?.src, alt: profileData?.alt } as ImageData
          }
          previewCount={1}
          profileMediaKind='avatar'
          closeModal={closeModal}
        />
      </Modal>

      <Button
        className='accent-tab profile-picture-frame absolute -mt-3 aspect-square w-24 -translate-y-1/2 overflow-hidden p-0
                   disabled:cursor-auto disabled:opacity-100 xs:w-32 sm:w-36
                   [&:hover>figure>span]:bg-black/10'
        onClick={openModal}
        disabled={!profileData}
      >
        {profileData ? (
          <NextImage
            useSkeleton
            className='profile-picture-frame hover-animation relative h-full w-full bg-main-background
                       inner:!m-1 inner:transition-colors inner:duration-200'
            imgClassName='profile-picture'
            src={profileData.src}
            alt={profileData.alt}
            layout='fill'
            key={profileData.src}
          />
        ) : (
          <div className='profile-picture-frame h-full bg-main-background p-1'>
            <div className='profile-picture h-full bg-main-sidebar-background' />
          </div>
        )}
      </Button>
    </div>
  );
}
