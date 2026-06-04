import cn from 'clsx';
import { publicAsset } from '@lib/assets';
import type { ReactNode } from 'react';

type IconProps = {
  className?: string;
};

type CustomIconProps = IconProps & {
  iconName: CustomIconName;
};

const Icons = {
  PinIcon,
  AppleIcon,
  PinOffIcon,
  GoogleIcon,
  TwitterPinIcon,
  TwitterIcon,
  TwitterBlueIcon,
  TwitterVerifiedIcon,
  TwitterHomeIcon,
  TwitterHomeFilledIcon,
  TwitterExploreIcon,
  TwitterExploreFilledIcon,
  TwitterNotificationsIcon,
  TwitterNotificationsOnIcon,
  TwitterNotificationsOnFilledIcon,
  TwitterNotificationsFilledIcon,
  TwitterMessagesIcon,
  TwitterMessagesFilledIcon,
  TwitterBookmarksIcon,
  TwitterBookmarksFilledIcon,
  TwitterListsIcon,
  TwitterListsFilledIcon,
  TwitterProfileIcon,
  TwitterProfileFilledIcon,
  TwitterMoreIcon,
  TwitterReplyIcon,
  TwitterReplyOffIcon,
  TwitterPeopleGroupIcon,
  TwitterAtIcon,
  TwitterNoIcon,
  TwitterRetweetIcon,
  TwitterLikeIcon,
  TwitterLikeFilledIcon,
  TwitterShareIcon,
  TwitterSettingsIcon,
  TwitterNewMessageIcon,
  TwitterInfoIcon,
  TwitterCloseIcon,
  TwitterSearchIcon,
  TwitterArrowLeftIcon,
  TwitterChevronRightIcon,
  TwitterMediaIcon,
  TwitterGifIcon,
  TwitterPollIcon,
  TwitterEmojiIcon,
  TwitterSendIcon,
  TwitterUndoIcon,
  TwitterCheckIcon,
  TwitterDoubleCheckIcon,
  TwitterCalendarIcon,
  TwitterBirthdayIcon,
  TwitterLocationIcon,
  FeatherIcon,
  SpinnerIcon,
  TriangleIcon
};

export type CustomIconName = keyof typeof Icons;

export function isCustomIconName(iconName: string): iconName is CustomIconName {
  return iconName in Icons;
}

export function CustomIcon({
  iconName,
  className
}: CustomIconProps): JSX.Element {
  const Icon = Icons[iconName];

  return <Icon className={className ?? 'h-6 w-6'} />;
}

function TwitterSvgIcon({
  className,
  children
}: IconProps & { children: ReactNode }): JSX.Element {
  return (
    <svg
      className={cn('fill-current', className)}
      viewBox='0 0 24 24'
      aria-hidden='true'
    >
      <g>{children}</g>
    </svg>
  );
}

function TwitterIcon({ className }: IconProps): JSX.Element {
  return (
    <TwitterSvgIcon className={className}>
      <path d='M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z' />
    </TwitterSvgIcon>
  );
}

function TwitterBlueIcon({ className }: IconProps): JSX.Element {
  return (
    <TwitterSvgIcon className={className}>
      <path d='M16.5 3H2v18h15c3.038 0 5.5-2.46 5.5-5.5 0-1.4-.524-2.68-1.385-3.65-.08-.09-.089-.22-.023-.32.574-.87.908-1.91.908-3.03C22 5.46 19.538 3 16.5 3Zm-.796 5.99c.457-.05.892-.17 1.296-.35-.302.45-.684.84-1.125 1.15.004.1.006.19.006.29 0 2.94-2.269 6.32-6.421 6.32-1.274 0-2.46-.37-3.459-1 .177.02.357.03.539.03 1.057 0 2.03-.35 2.803-.95-.988-.02-1.821-.66-2.109-1.54.138.03.28.04.425.04.206 0 .405-.03.595-.08-1.033-.2-1.811-1.1-1.811-2.18v-.03c.305.17.652.27 1.023.28-.606-.4-1.004-1.08-1.004-1.85 0-.4.111-.78.305-1.11 1.113 1.34 2.775 2.22 4.652 2.32-.038-.17-.058-.33-.058-.51 0-1.23 1.01-2.22 2.256-2.22.649 0 1.235.27 1.647.7.514-.1.997-.28 1.433-.54-.168.52-.526.96-.992 1.23Z' />
    </TwitterSvgIcon>
  );
}

function TwitterVerifiedIcon({ className }: IconProps): JSX.Element {
  return (
    <span
      className={cn(
        `relative top-[0.0625em] inline-block shrink-0 bg-contain bg-center
         bg-no-repeat align-text-bottom leading-none`,
        className
      )}
      style={{
        backgroundImage: `url(${publicAsset('/assets/twitter-verified.svg')})`
      }}
      role='img'
      aria-label='Verified account'
    />
  );
}

function TwitterHomeIcon({ className }: IconProps): JSX.Element {
  return (
    <TwitterSvgIcon className={className}>
      <path d='M22.46 7.57L12.357 2.115c-.223-.12-.49-.12-.713 0L1.543 7.57c-.364.197-.5.652-.303 1.017.135.25.394.393.66.393.12 0 .243-.03.356-.09l.815-.44L4.7 19.963c.214 1.215 1.308 2.062 2.658 2.062h9.282c1.352 0 2.445-.848 2.663-2.087l1.626-11.49.818.442c.364.193.82.06 1.017-.304.196-.363.06-.818-.304-1.016zm-4.638 12.133c-.107.606-.703.822-1.18.822H7.36c-.48 0-1.075-.216-1.178-.798L4.48 7.69 12 3.628l7.522 4.06-1.7 12.015z M8.22 12.184c0 2.084 1.695 3.78 3.78 3.78s3.78-1.696 3.78-3.78-1.695-3.78-3.78-3.78-3.78 1.696-3.78 3.78zm6.06 0c0 1.258-1.022 2.28-2.28 2.28s-2.28-1.022-2.28-2.28 1.022-2.28 2.28-2.28 2.28 1.022 2.28 2.28z' />
    </TwitterSvgIcon>
  );
}

function TwitterHomeFilledIcon({ className }: IconProps): JSX.Element {
  return (
    <TwitterSvgIcon className={className}>
      <path d='M22.58 7.35L12.475 1.897c-.297-.16-.654-.16-.95 0L1.425 7.35c-.486.264-.667.87-.405 1.356.18.335.525.525.88.525.16 0 .324-.038.475-.12l.734-.396 1.59 11.25c.216 1.214 1.31 2.062 2.66 2.062h9.282c1.35 0 2.444-.848 2.662-2.088l1.588-11.225.737.398c.485.263 1.092.082 1.354-.404.263-.486.08-1.093-.404-1.355zM12 15.435c-1.795 0-3.25-1.455-3.25-3.25s1.455-3.25 3.25-3.25 3.25 1.455 3.25 3.25-1.455 3.25-3.25 3.25z' />
    </TwitterSvgIcon>
  );
}

function TwitterExploreIcon({ className }: IconProps): JSX.Element {
  return (
    <TwitterSvgIcon className={className}>
      <path d='M21 7.337h-3.93l.372-4.272c.036-.412-.27-.775-.682-.812-.417-.03-.776.27-.812.683l-.383 4.4h-6.32l.37-4.27c.037-.413-.27-.776-.68-.813-.42-.03-.777.27-.813.683l-.382 4.4H3.782c-.414 0-.75.337-.75.75s.336.75.75.75H7.61l-.55 6.327H3c-.414 0-.75.336-.75.75s.336.75.75.75h3.93l-.372 4.272c-.036.412.27.775.682.812l.066.003c.385 0 .712-.295.746-.686l.383-4.4h6.32l-.37 4.27c-.036.413.27.776.682.813l.066.003c.385 0 .712-.295.746-.686l.382-4.4h3.957c.413 0 .75-.337.75-.75s-.337-.75-.75-.75H16.39l.55-6.327H21c.414 0 .75-.336.75-.75s-.336-.75-.75-.75zm-6.115 7.826h-6.32l.55-6.326h6.32l-.55 6.326z' />
    </TwitterSvgIcon>
  );
}

function TwitterExploreFilledIcon({ className }: IconProps): JSX.Element {
  return (
    <TwitterSvgIcon className={className}>
      <path d='M20.585 9.468c.66 0 1.2-.538 1.2-1.2 0-.662-.54-1.2-1.2-1.2h-3.22l.31-3.547c.027-.318-.07-.63-.277-.875-.206-.245-.495-.396-.822-.425-.65-.035-1.235.432-1.293 1.093l-.326 3.754H9.9l.308-3.545c.06-.658-.43-1.242-1.097-1.302-.665-.05-1.235.43-1.293 1.092l-.325 3.754h-3.33c-.663 0-1.2.538-1.2 1.2 0 .662.538 1.2 1.2 1.2h3.122l-.44 5.064H3.416c-.662 0-1.2.54-1.2 1.2s.538 1.202 1.2 1.202h3.22l-.31 3.548c-.057.657.432 1.24 1.09 1.3l.106.005c.626 0 1.14-.472 1.195-1.098l.327-3.753H14.1l-.308 3.544c-.06.658.43 1.242 1.09 1.302l.106.005c.617 0 1.142-.482 1.195-1.098l.325-3.753h3.33c.66 0 1.2-.54 1.2-1.2s-.54-1.202-1.2-1.202h-3.122l.44-5.064h3.43zm-5.838 0l-.44 5.063H9.253l.44-5.062h5.055z' />
    </TwitterSvgIcon>
  );
}

function TwitterNotificationsIcon({ className }: IconProps): JSX.Element {
  return (
    <TwitterSvgIcon className={className}>
      <path d='M21.697 16.468c-.02-.016-2.14-1.64-2.103-6.03.02-2.532-.812-4.782-2.347-6.335C15.872 2.71 14.01 1.94 12.005 1.93h-.013c-2.004.01-3.866.78-5.242 2.174-1.534 1.553-2.368 3.802-2.346 6.334.037 4.33-2.02 5.967-2.102 6.03-.26.193-.366.53-.265.838.102.308.39.515.712.515h4.92c.102 2.31 1.997 4.16 4.33 4.16s4.226-1.85 4.327-4.16h4.922c.322 0 .61-.206.71-.514.103-.307-.003-.645-.263-.838zM12 20.478c-1.505 0-2.73-1.177-2.828-2.658h5.656c-.1 1.48-1.323 2.66-2.828 2.66zM4.38 16.32c.74-1.132 1.548-3.028 1.524-5.896-.018-2.16.644-3.982 1.913-5.267C8.91 4.05 10.397 3.437 12 3.43c1.603.008 3.087.62 4.18 1.728 1.27 1.285 1.933 3.106 1.915 5.267-.024 2.868.785 4.765 1.525 5.896H4.38z' />
    </TwitterSvgIcon>
  );
}

function TwitterNotificationsOnIcon({ className }: IconProps): JSX.Element {
  return (
    <TwitterSvgIcon className={className}>
      <path d='M23.24,3.26h-2.425L20.815,0.832c0,-0.414 -0.336,-0.75 -0.75,-0.75s-0.75,0.336 -0.75,0.75L19.315,3.26L16.89,3.26c-0.414,0 -0.75,0.335 -0.75,0.75s0.336,0.75 0.75,0.75h2.426v2.424c0,0.414 0.336,0.75 0.75,0.75s0.75,-0.336 0.75,-0.75L20.816,4.76h2.425c0.415,0 0.75,-0.337 0.75,-0.75s-0.336,-0.75 -0.75,-0.75zM17.01,10.866c0.02,-2.434 -0.782,-4.597 -2.258,-6.09 -1.324,-1.342 -3.116,-2.084 -5.046,-2.093L9.693,2.683c-1.93,0.01 -3.722,0.75 -5.046,2.092C3.172,6.27 2.37,8.433 2.39,10.867 2.426,15 0.467,16.56 0.39,16.62c-0.26,0.193 -0.367,0.53 -0.266,0.838 0.102,0.308 0.39,0.515 0.712,0.515h4.716c0.11,2.226 1.94,4.007 4.194,4.007s4.083,-1.78 4.194,-4.007h4.625c0.32,0 0.604,-0.206 0.707,-0.51s0,-0.643 -0.255,-0.838c-0.082,-0.064 -2.043,-1.625 -2.008,-5.76zM9.745,20.48c-1.426,0 -2.586,-1.11 -2.694,-2.508h5.388c-0.108,1.4 -1.268,2.507 -2.694,2.507zM2.455,16.473c0.702,-1.095 1.457,-2.904 1.434,-5.618 -0.017,-2.062 0.614,-3.8 1.825,-5.025C6.757,4.774 8.172,4.19 9.7,4.184c1.527,0.007 2.943,0.59 3.985,1.646 1.21,1.226 1.84,2.963 1.823,5.025 -0.022,2.714 0.732,4.523 1.437,5.618L2.455,16.473z' />
    </TwitterSvgIcon>
  );
}

function TwitterNotificationsFilledIcon({ className }: IconProps): JSX.Element {
  return (
    <TwitterSvgIcon className={className}>
      <path d='M21.697 16.468c-.02-.016-2.14-1.64-2.103-6.03.02-2.533-.812-4.782-2.347-6.334-1.375-1.393-3.237-2.164-5.242-2.172h-.013c-2.004.008-3.866.78-5.242 2.172-1.534 1.553-2.367 3.802-2.346 6.333.037 4.332-2.02 5.967-2.102 6.03-.26.194-.366.53-.265.838s.39.515.713.515h4.494c.1 2.544 2.188 4.587 4.756 4.587s4.655-2.043 4.756-4.587h4.494c.324 0 .61-.208.712-.515s-.005-.644-.265-.837zM12 20.408c-1.466 0-2.657-1.147-2.756-2.588h5.512c-.1 1.44-1.29 2.587-2.756 2.587z' />
    </TwitterSvgIcon>
  );
}

function TwitterNotificationsOnFilledIcon({ className }: IconProps): JSX.Element {
  return (
    <TwitterSvgIcon className={className}>
      <path d='M35.61,0.15c-0.375,-0.184 -0.822,-0.03 -1.006,0.34L19.74,6.266l-1.703,-1.81c-0.283,-0.303 -0.758,-0.316 -1.06,-0.032 -0.302,0.284 -0.316,0.76 -0.032,1.06l2.443,2.596c0.143,0.15 0.34,0.235 0.546,0.235 0.036,0 0.073,-0.003 0.11,-0.008 0.243,-0.036 0.452,-0.19 0.562,-0.41l3.342,-6.74c0.184,-0.372 0.032,-0.822 -0.34,-1.006zM19.018,16.625c-0.083,-0.064 -2.044,-1.625 -2.01,-5.76 0.022,-2.433 -0.78,-4.596 -2.256,-6.09 -1.324,-1.34 -3.116,-2.083 -5.046,-2.092H9.693c-1.93,0.01 -3.722,0.75 -5.046,2.092C3.172,6.27 2.37,8.433 2.39,10.867 2.426,15 0.467,16.56 0.39,16.62c-0.26,0.193 -0.367,0.53 -0.266,0.838 0.102,0.308 0.39,0.515 0.712,0.515h4.08c0.088,2.57 2.193,4.64 4.785,4.64s4.698,-2.07 4.785,-4.64h4.082c0.32,0 0.604,-0.206 0.707,-0.51s-0.002,-0.643 -0.256,-0.838zM9.7,20.513c-1.434,0 -2.6,-1.127 -2.684,-2.54h5.368c-0.085,1.413 -1.25,2.54 -2.684,2.54z' />
    </TwitterSvgIcon>
  );
}

function TwitterMessagesIcon({ className }: IconProps): JSX.Element {
  return (
    <TwitterSvgIcon className={className}>
      <path d='M19.25 3.018H4.75C3.233 3.018 2 4.252 2 5.77v12.495c0 1.518 1.233 2.753 2.75 2.753h14.5c1.517 0 2.75-1.235 2.75-2.753V5.77c0-1.518-1.233-2.752-2.75-2.752zm-14.5 1.5h14.5c.69 0 1.25.56 1.25 1.25v.714l-8.05 5.367c-.273.18-.626.182-.9-.002L3.5 6.482v-.714c0-.69.56-1.25 1.25-1.25zm14.5 14.998H4.75c-.69 0-1.25-.56-1.25-1.25V8.24l7.24 4.83c.383.256.822.384 1.26.384.44 0 .877-.128 1.26-.383l7.24-4.83v10.022c0 .69-.56 1.25-1.25 1.25z' />
    </TwitterSvgIcon>
  );
}

function TwitterMessagesFilledIcon({ className }: IconProps): JSX.Element {
  return (
    <TwitterSvgIcon className={className}>
      <path d='M11.55 12.082c.273.182.627.182.9 0L22 5.716V5.5c0-1.24-1.01-2.25-2.25-2.25H4.25C3.01 3.25 2 4.26 2 5.5v.197l9.55 6.385z M13.26 13.295c-.383.255-.82.382-1.26.382s-.877-.127-1.26-.383L2 7.452v11.67c0 1.24 1.01 2.25 2.25 2.25h15.5c1.24 0 2.25-1.01 2.25-2.25V7.47l-8.74 5.823z' />
    </TwitterSvgIcon>
  );
}

function TwitterBookmarksIcon({ className }: IconProps): JSX.Element {
  return (
    <TwitterSvgIcon className={className}>
      <path d='M19.9 23.5c-.157 0-.312-.05-.442-.144L12 17.928l-7.458 5.43c-.228.164-.53.19-.782.06-.25-.127-.41-.385-.41-.667V5.6c0-1.24 1.01-2.25 2.25-2.25h12.798c1.24 0 2.25 1.01 2.25 2.25v17.15c0 .282-.158.54-.41.668-.106.055-.223.082-.34.082zM12 16.25c.155 0 .31.048.44.144l6.71 4.883V5.6c0-.412-.337-.75-.75-.75H5.6c-.413 0-.75.338-.75.75v15.677l6.71-4.883c.13-.096.285-.144.44-.144z' />
    </TwitterSvgIcon>
  );
}

function TwitterBookmarksFilledIcon({ className }: IconProps): JSX.Element {
  return (
    <TwitterSvgIcon className={className}>
      <path d='M19.9 23.5c-.2 0-.3 0-.4-.1L12 17.9l-7.5 5.4c-.2.2-.5.2-.8.1-.2-.1-.4-.4-.4-.7V5.6c0-1.2 1-2.2 2.2-2.2h12.8c1.2 0 2.2 1 2.2 2.2v17.1c0 .3-.2.5-.4.7 0 .1-.1.1-.2.1z' />
    </TwitterSvgIcon>
  );
}

function TwitterListsIcon({ className }: IconProps): JSX.Element {
  return (
    <TwitterSvgIcon className={className}>
      <path d='M19.75 22H4.25C3.01 22 2 20.99 2 19.75V4.25C2 3.01 3.01 2 4.25 2h15.5C20.99 2 22 3.01 22 4.25v15.5c0 1.24-1.01 2.25-2.25 2.25zM4.25 3.5c-.414 0-.75.337-.75.75v15.5c0 .413.336.75.75.75h15.5c.414 0 .75-.337.75-.75V4.25c0-.413-.336-.75-.75-.75H4.25z M17 8.64H7c-.414 0-.75-.337-.75-.75s.336-.75.75-.75h10c.414 0 .75.335.75.75s-.336.75-.75.75zm0 4.11H7c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h10c.414 0 .75.336.75.75s-.336.75-.75.75zm-5 4.11H7c-.414 0-.75-.335-.75-.75s.336-.75.75-.75h5c.414 0 .75.337.75.75s-.336.75-.75.75z' />
    </TwitterSvgIcon>
  );
}

function TwitterListsFilledIcon({ className }: IconProps): JSX.Element {
  return (
    <TwitterSvgIcon className={className}>
      <path d='M19.75 2H4.25C3.013 2 2 3.013 2 4.25v15.5C2 20.987 3.013 22 4.25 22h15.5c1.237 0 2.25-1.013 2.25-2.25V4.25C22 3.013 20.987 2 19.75 2zM11 16.75H7c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h4c.414 0 .75.336.75.75s-.336.75-.75.75zm6-4H7c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h10c.414 0 .75.336.75.75s-.336.75-.75.75zm0-4H7c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h10c.414 0 .75.336.75.75s-.336.75-.75.75z' />
    </TwitterSvgIcon>
  );
}

function TwitterProfileIcon({ className }: IconProps): JSX.Element {
  return (
    <TwitterSvgIcon className={className}>
      <path d='M12 11.816c1.355 0 2.872-.15 3.84-1.256.814-.93 1.078-2.368.806-4.392-.38-2.825-2.117-4.512-4.646-4.512S7.734 3.343 7.354 6.17c-.272 2.022-.008 3.46.806 4.39.968 1.107 2.485 1.256 3.84 1.256zM8.84 6.368c.162-1.2.787-3.212 3.16-3.212s2.998 2.013 3.16 3.212c.207 1.55.057 2.627-.45 3.205-.455.52-1.266.743-2.71.743s-2.255-.223-2.71-.743c-.507-.578-.657-1.656-.45-3.205zm11.44 12.868c-.877-3.526-4.282-5.99-8.28-5.99s-7.403 2.464-8.28 5.99c-.172.692-.028 1.4.395 1.94.408.52 1.04.82 1.733.82h12.304c.693 0 1.325-.3 1.733-.82.424-.54.567-1.247.394-1.94zm-1.576 1.016c-.126.16-.316.246-.552.246H5.848c-.235 0-.426-.085-.552-.246-.137-.174-.18-.412-.12-.654.71-2.855 3.517-4.85 6.824-4.85s6.114 1.994 6.824 4.85c.06.242.017.48-.12.654z' />
    </TwitterSvgIcon>
  );
}

function TwitterProfileFilledIcon({ className }: IconProps): JSX.Element {
  return (
    <TwitterSvgIcon className={className}>
      <path d='M12.225 12.165c-1.356 0-2.872-.15-3.84-1.256-.814-.93-1.077-2.368-.805-4.392.38-2.826 2.116-4.513 4.646-4.513s4.267 1.687 4.646 4.513c.272 2.024.008 3.46-.806 4.392-.97 1.106-2.485 1.255-3.84 1.255zm5.849 9.85H6.376c-.663 0-1.25-.28-1.65-.786-.422-.534-.576-1.27-.41-1.968.834-3.53 4.086-5.997 7.908-5.997s7.074 2.466 7.91 5.997c.164.698.01 1.434-.412 1.967-.4.505-.985.785-1.648.785z' />
    </TwitterSvgIcon>
  );
}

function TwitterMoreIcon({ className }: IconProps): JSX.Element {
  return (
    <TwitterSvgIcon className={className}>
      <path d='M15.5,12a1.5,1.5 0 1,0 3,0a1.5,1.5 0 1,0 -3,0 M10.5,12a1.5,1.5 0 1,0 3,0a1.5,1.5 0 1,0 -3,0 M5.5,12a1.5,1.5 0 1,0 3,0a1.5,1.5 0 1,0 -3,0 M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z' />
    </TwitterSvgIcon>
  );
}

function TwitterReplyIcon({ className }: IconProps): JSX.Element {
  return (
    <TwitterSvgIcon className={className}>
      <path d='M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z' />
    </TwitterSvgIcon>
  );
}

function TwitterReplyOffIcon({ className }: IconProps): JSX.Element {
  return (
    <TwitterSvgIcon className={className}>
      <path d='M10.478 22.065c-.124 0-.248-.03-.36-.092-.24-.132-.39-.384-.39-.658v-4.562c0-.414.336-.75.75-.75s.75.336.75.75v3.187c1.912-1.238 5.64-3.684 6.772-4.644 1.57-1.33 2.51-3.265 2.512-5.175 0-1.075-.266-2.13-.767-3.05-.197-.364-.063-.82.3-1.018.367-.196.82-.062 1.02.3.617 1.138.945 2.437.947 3.76v.02c-.005 2.344-1.142 4.7-3.043 6.31-1.616 1.37-7.825 5.34-8.09 5.508-.12.078-.262.117-.402.117zM2.75 20.5c-.192 0-.384-.073-.53-.22-.293-.293-.293-.768 0-1.06L20.72.72c.293-.294.768-.294 1.06 0s.294.767 0 1.06l-18.5 18.5c-.146.147-.338.22-.53.22zM4.076 14.507c-.243 0-.48-.117-.625-.335-.777-1.17-1.188-2.57-1.188-4.056 0-4.374 3.427-7.8 7.8-7.8h4.34c.415 0 .75.335.75.75s-.335.75-.75.75h-4.34c-3.532 0-6.3 2.767-6.3 6.3 0 1.205.315 2.29.938 3.226.23.345.137.81-.21 1.04-.127.084-.27.125-.414.125z' />
    </TwitterSvgIcon>
  );
}

function TwitterPeopleGroupIcon({ className }: IconProps): JSX.Element {
  return (
    <TwitterSvgIcon className={className}>
      <path d='M23.53 15.155c0 .716-.58 1.296-1.296 1.296h-4.128c-.034-.144-.077-.29-.136-.425-.05-.145-.102-.29-.17-.426-.444-.948-1.16-1.74-2.082-2.304-.12-.085-.247-.162-.375-.213-.12-.077-.247-.136-.384-.188.118-.18.255-.34.408-.495.86-.853 2.098-1.322 3.497-1.322h.017c2.738 0 4.648 1.68 4.648 4.077zM21.398 7.77c0 .682-.162 1.21-.478 1.578-.52.588-1.322.665-2.038.665-.725 0-1.527-.077-2.038-.665-.435-.495-.58-1.262-.435-2.328.195-1.5 1.116-2.396 2.464-2.396 1.34 0 2.26.895 2.465 2.396.032.264.058.52.058.75zM11.99 12.29c-.084 0-.17 0-.246.01.077.008.162.008.24.008.084 0 .178 0 .263-.01-.085-.008-.17-.008-.256-.008z' />
      <path d='M14.806 9.8c0 .768-.18 1.356-.537 1.765-.496.57-1.255.708-1.98.733-.017 0-.026.01-.043 0-.085-.01-.17-.01-.256-.01s-.17 0-.246.01c-.742-.017-1.535-.136-2.047-.733-.486-.554-.64-1.416-.478-2.618.23-1.68 1.26-2.686 2.762-2.686s2.54 1.007 2.763 2.687c.044.307.06.588.06.853zM17.236 17.96c0 .786-.63 1.417-1.416 1.417H8.145c-.776 0-1.416-.63-1.416-1.416 0-1.176.46-2.276 1.287-3.103.972-.972 2.405-1.492 3.974-1.5.922 0 1.75.16 2.466.468.136.05.264.11.384.188.128.06.256.128.375.213.563.358 1.032.82 1.373 1.373.085.135.162.28.23.425.068.136.12.28.17.426.163.47.248.974.248 1.51zM.47 15.155c0 .716.58 1.296 1.296 1.296h4.128c.034-.144.077-.29.136-.425.05-.145.102-.29.17-.426.444-.948 1.16-1.74 2.082-2.304.12-.085.247-.162.375-.213.12-.077.247-.136.384-.188-.118-.18-.255-.34-.408-.495-.86-.853-2.098-1.322-3.497-1.322h-.017c-2.746 0-4.648 1.68-4.648 4.077zM2.602 7.77c0 .682.162 1.21.478 1.578.52.588 1.322.665 2.038.665.725 0 1.527-.077 2.038-.665.435-.495.58-1.262.435-2.328-.204-1.5-1.125-2.397-2.472-2.397-1.34 0-2.26.895-2.465 2.396-.034.264-.05.52-.05.75z' />
    </TwitterSvgIcon>
  );
}

function TwitterAtIcon({ className }: IconProps): JSX.Element {
  return (
    <TwitterSvgIcon className={className}>
      <path d='M16.04 7.266c-.45 0-.815.297-.947.7l-.03.113s-1.064-1.397-3.277-1.397c-2.855 0-4.928 2.4-4.928 5.706 0 2.495 1.755 4.525 3.912 4.525 2.307 0 3.632-1.492 3.632-1.492s.597 1.75 3.503 1.75c.49 0 4.837-.297 4.837-5.172 0-5.923-4.82-10.743-10.744-10.743-5.922 0-10.74 4.82-10.74 10.743 0 5.924 4.818 10.743 10.742 10.743 2.244 0 4.04-.544 5.82-1.765.163-.112.273-.283.31-.48s-.005-.394-.118-.557c-.224-.327-.71-.418-1.037-.193-1.516 1.04-3.05 1.504-4.976 1.504-5.102 0-9.25-4.15-9.25-9.25S6.9 2.75 12 2.75 21.25 6.9 21.25 12c0 2.916-1.822 3.9-3.234 3.9-.53 0-2.234-.213-1.906-2.103 0 0 .938-5.4.938-5.523-.002-.557-.452-1.008-1.01-1.008zm-2.235 6.55c-.58.83-1.378 1.305-2.247 1.335l-.105.003c-1.483 0-2.52-1.112-2.578-2.768-.075-2.12 1.366-3.964 3.146-4.027l.102-.002c1.423 0 2.417 1.07 2.474 2.66.035 1.024-.245 2.018-.79 2.8z' />
    </TwitterSvgIcon>
  );
}

function TwitterNoIcon({ className }: IconProps): JSX.Element {
  return (
    <TwitterSvgIcon className={className}>
      <path d='M12 1.25C6.072 1.25 1.25 6.072 1.25 12S6.072 22.75 12 22.75 22.75 17.928 22.75 12 17.928 1.25 12 1.25zm0 1.5c2.28 0 4.368.834 5.982 2.207L4.957 17.982C3.584 16.368 2.75 14.282 2.75 12c0-5.1 4.15-9.25 9.25-9.25zm0 18.5c-2.28 0-4.368-.834-5.982-2.207L19.043 6.018c1.373 1.614 2.207 3.7 2.207 5.982 0 5.1-4.15 9.25-9.25 9.25z' />
    </TwitterSvgIcon>
  );
}

function TwitterRetweetIcon({ className }: IconProps): JSX.Element {
  return (
    <TwitterSvgIcon className={className}>
      <path d='M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z' />
    </TwitterSvgIcon>
  );
}

function TwitterPinIcon({ className }: IconProps): JSX.Element {
  return (
    <TwitterSvgIcon className={className}>
      <path d='M7.875 1.75c-.414 0-.75.336-.75.75v3.3L4.62 9.11c-.09.12-.14.265-.14.415v2.85c0 .414.336.75.75.75h5.02V20.5c0 .414.336.75.75.75s.75-.336.75-.75v-7.375h5.02c.414 0 .75-.336.75-.75v-2.85c0-.15-.05-.295-.14-.415L14.875 5.8V2.5c0-.414-.336-.75-.75-.75h-6.25zm.75 1.5h4.75v2.8c0 .164.054.323.152.454l2.493 3.3v1.82H5.98v-1.82l2.493-3.3c.098-.13.152-.29.152-.454v-2.8z' />
    </TwitterSvgIcon>
  );
}

function TwitterLikeIcon({ className }: IconProps): JSX.Element {
  return (
    <TwitterSvgIcon className={className}>
      <path d='M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z' />
    </TwitterSvgIcon>
  );
}

function TwitterLikeFilledIcon({ className }: IconProps): JSX.Element {
  return (
    <TwitterSvgIcon className={className}>
      <path d='M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12z' />
    </TwitterSvgIcon>
  );
}

function TwitterShareIcon({ className }: IconProps): JSX.Element {
  return (
    <TwitterSvgIcon className={className}>
      <path d='M17.53 7.47l-5-5c-.293-.293-.768-.293-1.06 0l-5 5c-.294.293-.294.768 0 1.06s.767.294 1.06 0l3.72-3.72V15c0 .414.336.75.75.75s.75-.336.75-.75V4.81l3.72 3.72c.146.147.338.22.53.22s.384-.072.53-.22c.293-.293.293-.767 0-1.06z M19.708 21.944H4.292C3.028 21.944 2 20.916 2 19.652V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 .437.355.792.792.792h15.416c.437 0 .792-.355.792-.792V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 1.264-1.028 2.292-2.292 2.292z' />
    </TwitterSvgIcon>
  );
}

function TwitterSettingsIcon({ className }: IconProps): JSX.Element {
  return (
    <TwitterSvgIcon className={className}>
      <path d='M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z' />
    </TwitterSvgIcon>
  );
}

function TwitterNewMessageIcon({ className }: IconProps): JSX.Element {
  return (
    <TwitterSvgIcon className={className}>
      <path d='M1.998 5.5c0-1.381 1.119-2.5 2.5-2.5h8.75v2h-8.75c-.276 0-.5.224-.5.5v2.764l8 3.638 3.885-1.765.828 1.82-4.713 2.142-8-3.638V18.5c0 .276.224.5.5.5h15c.276 0 .5-.224.5-.5v-8.25h2v8.25c0 1.381-1.119 2.5-2.5 2.5h-15c-1.381 0-2.5-1.119-2.5-2.5v-13z' />
      <path d='M18 2h2v3h3v2h-3v3h-2V7h-3V5h3V2z' />
    </TwitterSvgIcon>
  );
}

function TwitterInfoIcon({ className }: IconProps): JSX.Element {
  return (
    <TwitterSvgIcon className={className}>
      <path d='M12 2.25c-5.376 0-9.75 4.374-9.75 9.75s4.374 9.75 9.75 9.75 9.75-4.374 9.75-9.75S17.376 2.25 12 2.25zm0 17.5c-4.273 0-7.75-3.477-7.75-7.75S7.727 4.25 12 4.25s7.75 3.477 7.75 7.75-3.477 7.75-7.75 7.75zM11 10h2v7h-2v-7zm0-3h2v2h-2V7z' />
    </TwitterSvgIcon>
  );
}

function TwitterCloseIcon({ className }: IconProps): JSX.Element {
  return (
    <TwitterSvgIcon className={className}>
      <path d='M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z' />
    </TwitterSvgIcon>
  );
}

function TwitterSearchIcon({ className }: IconProps): JSX.Element {
  return (
    <TwitterSvgIcon className={className}>
      <path d='M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.61 0 3.09-.59 4.23-1.56l4.16 4.17 1.42-1.42-4.17-4.16c.97-1.14 1.56-2.62 1.56-4.23 0-3.59-2.91-6.5-6.5-6.5zm0 2c2.49 0 4.5 2.01 4.5 4.5s-2.01 4.5-4.5 4.5-4.5-2.01-4.5-4.5 2.01-4.5 4.5-4.5z' />
    </TwitterSvgIcon>
  );
}

function TwitterArrowLeftIcon({ className }: IconProps): JSX.Element {
  return (
    <TwitterSvgIcon className={className}>
      <path d='M20 11H7.414l4.293-4.293-1.414-1.414L3.586 12l6.707 6.707 1.414-1.414L7.414 13H20v-2z' />
    </TwitterSvgIcon>
  );
}

function TwitterChevronRightIcon({ className }: IconProps): JSX.Element {
  return (
    <TwitterSvgIcon className={className}>
      <path d='M9.29 18.71L8 17.41 13.42 12 8 6.59l1.29-1.3L16 12l-6.71 6.71z' />
    </TwitterSvgIcon>
  );
}

function TwitterMediaIcon({ className }: IconProps): JSX.Element {
  return (
    <TwitterSvgIcon className={className}>
      <path d='M3 5.5C3 4.12 4.12 3 5.5 3h13C19.88 3 21 4.12 21 5.5v13c0 1.38-1.12 2.5-2.5 2.5h-13C4.12 21 3 19.88 3 18.5v-13zM5.5 5c-.28 0-.5.22-.5.5v9.09l3.55-3.54c.59-.59 1.54-.59 2.12 0L12 12.38l3.55-3.54c.59-.59 1.54-.59 2.12 0L19 10.17V5.5c0-.28-.22-.5-.5-.5h-13zm13 14c.28 0 .5-.22.5-.5V13l-2.33-2.33-3.55 3.54c-.59.59-1.54.59-2.12 0l-1.33-1.33L5 16.87v1.63c0 .28.22.5.5.5h13zM8.75 9.5c-.69 0-1.25-.56-1.25-1.25S8.06 7 8.75 7 10 7.56 10 8.25 9.44 9.5 8.75 9.5z' />
    </TwitterSvgIcon>
  );
}

function TwitterGifIcon({ className }: IconProps): JSX.Element {
  return (
    <svg
      className={cn('fill-current', className)}
      viewBox='0 0 24 24'
      aria-hidden='true'
    >
      <g>
        <path d='M3 5.5C3 4.12 4.12 3 5.5 3h13C19.88 3 21 4.12 21 5.5v13c0 1.38-1.12 2.5-2.5 2.5h-13C4.12 21 3 19.88 3 18.5v-13zM5.5 5c-.28 0-.5.22-.5.5v13c0 .28.22.5.5.5h13c.28 0 .5-.22.5-.5v-13c0-.28-.22-.5-.5-.5h-13z' />
        <path d='M7.5 9.5H11v1.5H9v2h2v1.5H7.5v-5zm5 0H14v5h-1.5v-5zm3 0H19V11h-2v.75h1.75v1.5H17v1.25h-1.5v-5z' />
      </g>
    </svg>
  );
}

function TwitterPollIcon({ className }: IconProps): JSX.Element {
  return (
    <TwitterSvgIcon className={className}>
      <path d='M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z' />
    </TwitterSvgIcon>
  );
}

function TwitterEmojiIcon({ className }: IconProps): JSX.Element {
  return (
    <TwitterSvgIcon className={className}>
      <path d='M12 22.25C6.34 22.25 1.75 17.66 1.75 12S6.34 1.75 12 1.75 22.25 6.34 22.25 12 17.66 22.25 12 22.25zm0-2c4.56 0 8.25-3.69 8.25-8.25S16.56 3.75 12 3.75 3.75 7.44 3.75 12s3.69 8.25 8.25 8.25zM8.5 11c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm7 0c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zM8.25 13.5h7.5c-.44 1.5-1.84 2.6-3.75 2.6s-3.31-1.1-3.75-2.6z' />
    </TwitterSvgIcon>
  );
}

function TwitterSendIcon({ className }: IconProps): JSX.Element {
  return (
    <TwitterSvgIcon className={className}>
      <path d='M2.5 21.866L23.236 12 2.5 2.134v7.658L17.06 12 2.5 14.208v7.658zM4.5 5.328L17.74 12 4.5 18.672v-2.747L11.394 14v-4L4.5 8.075V5.328z' />
    </TwitterSvgIcon>
  );
}

function TwitterUndoIcon({ className }: IconProps): JSX.Element {
  return (
    <TwitterSvgIcon className={className}>
      <path d='m6.29 2.29 1.42 1.42L5.41 6H15c3.87 0 7 3.13 7 7s-3.13 7-7 7H8v-2h7c2.76 0 5-2.24 5-5s-2.24-5-5-5H5.41l2.3 2.29-1.42 1.42L1.59 7l4.7-4.71Z' />
    </TwitterSvgIcon>
  );
}

function TwitterCheckIcon({ className }: IconProps): JSX.Element {
  return (
    <TwitterSvgIcon className={className}>
      <path d='M9.55 18.17L3.8 12.42 5.21 11l4.34 4.34 9.24-9.24 1.41 1.42-10.65 10.65z' />
    </TwitterSvgIcon>
  );
}

function TwitterDoubleCheckIcon({ className }: IconProps): JSX.Element {
  return (
    <TwitterSvgIcon className={className}>
      <path d='M7.65 17.2L2.9 12.45l1.41-1.42 3.34 3.34 8.04-8.04 1.41 1.42L7.65 17.2z' />
      <path d='M12.45 17.2l-2.25-2.25 1.41-1.42.84.84 7.25-7.25 1.41 1.42-8.66 8.66z' />
    </TwitterSvgIcon>
  );
}

function TwitterCalendarIcon({ className }: IconProps): JSX.Element {
  return (
    <TwitterSvgIcon className={className}>
      <path d='M7 2h2v2h6V2h2v2h1.5C19.88 4 21 5.12 21 6.5v12c0 1.38-1.12 2.5-2.5 2.5h-13C4.12 21 3 19.88 3 18.5v-12C3 5.12 4.12 4 5.5 4H7V2zm11.5 17c.28 0 .5-.22.5-.5V9H5v9.5c0 .28.22.5.5.5h13zM5 7h14v-.5c0-.28-.22-.5-.5-.5h-13c-.28 0-.5.22-.5.5V7z' />
    </TwitterSvgIcon>
  );
}

function TwitterBirthdayIcon({ className }: IconProps): JSX.Element {
  return (
    <TwitterSvgIcon className={className}>
      <path d='M7.75 11.083c-.414 0-.75-.336-.75-.75C7 7.393 9.243 5 12 5c.414 0 .75.336.75.75s-.336.75-.75.75c-1.93 0-3.5 1.72-3.5 3.833 0 .414-.336.75-.75.75z' />
      <path d='M20.75 10.333c0-5.01-3.925-9.083-8.75-9.083s-8.75 4.074-8.75 9.083c0 4.605 3.32 8.412 7.605 8.997l-1.7 1.83c-.137.145-.173.357-.093.54.08.182.26.3.46.3h4.957c.198 0 .378-.118.457-.3.08-.183.044-.395-.092-.54l-1.7-1.83c4.285-.585 7.605-4.392 7.605-8.997zM12 17.917c-3.998 0-7.25-3.402-7.25-7.584S8.002 2.75 12 2.75s7.25 3.4 7.25 7.583-3.252 7.584-7.25 7.584z' />
    </TwitterSvgIcon>
  );
}

function TwitterLocationIcon({ className }: IconProps): JSX.Element {
  return (
    <TwitterSvgIcon className={className}>
      <path d='M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z' />
    </TwitterSvgIcon>
  );
}

function FeatherIcon({ className }: IconProps): JSX.Element {
  return (
    <svg
      className={cn('fill-current', className)}
      viewBox='0 0 24 24'
      aria-hidden='true'
    >
      <g>
        <path d='M23 3c-6.62-.1-10.38 2.421-13.05 6.03C7.29 12.61 6 17.331 6 22h2c0-1.007.07-2.012.19-3H12c4.1 0 7.48-3.082 7.94-7.054C22.79 10.147 23.17 6.359 23 3zm-7 8h-1.5v2H16c.63-.016 1.2-.08 1.72-.188C16.95 15.24 14.68 17 12 17H8.55c.57-2.512 1.57-4.851 3-6.78 2.16-2.912 5.29-4.911 9.45-5.187C20.95 8.079 19.9 11 16 11zM4 9V6H1V4h3V1h2v3h3v2H6v3H4z' />
      </g>
    </svg>
  );
}

function SpinnerIcon({ className }: IconProps): JSX.Element {
  return (
    <svg
      className={cn('animate-spin', className)}
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
    >
      <circle
        className='opacity-25'
        cx='12'
        cy='12'
        r='10'
        stroke='currentColor'
        strokeWidth='4'
      />
      <path
        className='opacity-75'
        fill='currentColor'
        d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
      />
    </svg>
  );
}

function GoogleIcon({ className }: IconProps): JSX.Element {
  return (
    <svg
      className={className}
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 48 48'
    >
      <g>
        <path
          fill='#EA4335'
          d='M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z'
        />
        <path
          fill='#4285F4'
          d='M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z'
        />
        <path
          fill='#FBBC05'
          d='M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z'
        />
        <path
          fill='#34A853'
          d='M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z'
        />
        <path fill='none' d='M0 0h48v48H0z' />
      </g>
    </svg>
  );
}

function AppleIcon({ className }: IconProps): JSX.Element {
  return (
    <svg className={className} viewBox='0 0 24 24'>
      <g>
        <path d='M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.12 0-.23-.02-.3-.03-.01-.06-.04-.22-.04-.39 0-1.15.572-2.27 1.206-2.98.804-.94 2.142-1.64 3.248-1.68.03.13.05.28.05.43zm4.565 15.71c-.03.07-.463 1.58-1.518 3.12-.945 1.34-1.94 2.71-3.43 2.71-1.517 0-1.9-.88-3.63-.88-1.698 0-2.302.91-3.67.91-1.377 0-2.332-1.26-3.428-2.8-1.287-1.82-2.323-4.63-2.323-7.28 0-4.28 2.797-6.55 5.552-6.55 1.448 0 2.675.95 3.6.95.865 0 2.222-1.01 3.902-1.01.613 0 2.886.06 4.374 2.19-.13.09-2.383 1.37-2.383 4.19 0 3.26 2.854 4.42 2.955 4.45z' />
      </g>
    </svg>
  );
}

function TriangleIcon({ className }: IconProps): JSX.Element {
  return (
    <svg className={className} viewBox='0 0 24 24' aria-hidden='true'>
      <g>
        <path d='M12.538 6.478c-.14-.146-.335-.228-.538-.228s-.396.082-.538.228l-9.252 9.53c-.21.217-.27.538-.152.815.117.277.39.458.69.458h18.5c.302 0 .573-.18.69-.457.118-.277.058-.598-.152-.814l-9.248-9.532z' />
      </g>
    </svg>
  );
}

function PinIcon({ className }: IconProps): JSX.Element {
  return (
    <svg
      className={className}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      strokeWidth='2'
      stroke='currentColor'
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M15 4.5l-4 4l-4 1.5l-1.5 1.5l7 7l1.5 -1.5l1.5 -4l4 -4' />
      <line x1='9' y1='15' x2='4.5' y2='19.5' />
      <line x1='14.5' y1='4' x2='20' y2='9.5' />
    </svg>
  );
}

function PinOffIcon({ className }: IconProps): JSX.Element {
  return (
    <svg
      className={className}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      strokeWidth='2'
      stroke='currentColor'
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <line x1='3' y1='3' x2='21' y2='21' />
      <path d='M15 4.5l-3.249 3.249m-2.57 1.433l-2.181 .818l-1.5 1.5l7 7l1.5 -1.5l.82 -2.186m1.43 -2.563l3.25 -3.251' />
      <line x1='9' y1='15' x2='4.5' y2='19.5' />
      <line x1='14.5' y1='4' x2='20' y2='9.5' />
    </svg>
  );
}
