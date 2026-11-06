import {
  BanIcon,
  BookOpenIcon,
  BugIcon,
  CoffeeIcon,
  CookieIcon,
  CpuIcon,
  DiscIcon,
  DownloadIcon,
  EyeIcon,
  FlameIcon,
  Gamepad2Icon,
  GhostIcon,
  GlobeIcon,
  HammerIcon,
  HeartIcon,
  MailIcon,
  MonitorIcon,
  MusicIcon,
  PhoneIcon,
  RadioIcon,
  SaveIcon,
  ShieldCheckIcon,
  SkullIcon,
  SmileIcon,
  SparklesIcon,
  StarIcon,
  TerminalIcon,
  TrophyIcon,
  ZapIcon,
} from "lucide-react"
import {
  WebButton,
  WebButtonLabel,
  WebButtonNow,
  WebButtonStrip,
  WebButtonTag,
} from "ui98"

export type Category = "now" | "get" | "anti" | "badge" | "site"

export const CATEGORIES: { value: Category | "all"; label: string }[] = [
  { value: "all", label: "All" },
  { value: "now", label: "Now!" },
  { value: "get", label: "Get it" },
  { value: "anti", label: "Anti" },
  { value: "badge", label: "Badges" },
  { value: "site", label: "Sites" },
]

export type WallButton = {
  id: string
  category: Category
  tip: string
  button: React.ReactNode
}

const silver = "linear-gradient(180deg,#f4f4f4,#c8c8c8 60%,#a8a8a8)"
const navy = "linear-gradient(180deg,#2a5bd7,#000080 55%,#00005a)"
const black = "#000000"

// Recreated in CSS from the families on the 1990s button walls, without
// anyone's logo: every one is a WebButton with a few parts.
export const WALL: WallButton[] = [
  // MARK: Now!
  {
    id: "ui98-now",
    category: "now",
    tip: "Powered by ui98",
    button: (
      <WebButton border="plate" font="verdana" background={silver} color="#000">
        <WebButtonTag background={navy} color="#fff">
          <MonitorIcon className="size-4" />
        </WebButtonTag>
        <WebButtonLabel>ui98</WebButtonLabel>
        <WebButtonNow />
      </WebButton>
    ),
  },
  {
    id: "navigator-now",
    category: "now",
    tip: "Get a browser. Any browser.",
    button: (
      <WebButton border="plate" font="arial" background={black} color="#fff">
        <GlobeIcon className="size-5 text-[#00a0ff]" />
        <WebButtonLabel className="-mt-2">surf</WebButtonLabel>
        <WebButtonNow />
      </WebButton>
    ),
  },
  {
    id: "html-now",
    category: "now",
    tip: "Learn HTML today!",
    button: (
      <WebButton
        border="plate"
        font="times"
        background="#ffffff"
        color="#000080"
      >
        <span className="font-mono text-[13px]">&lt;HTML&gt;</span>
        <WebButtonNow />
      </WebButton>
    ),
  },
  {
    id: "dialup-now",
    category: "now",
    tip: "56k never felt so fast",
    button: (
      <WebButton border="plate" font="verdana" background={navy} color="#fff">
        <PhoneIcon className="size-4 text-[#ffcc00]" />
        <WebButtonLabel className="-mt-2">56k</WebButtonLabel>
        <WebButtonNow className="text-[#ffcc00]" />
      </WebButton>
    ),
  },
  {
    id: "quake-now",
    category: "now",
    tip: "Frag night every Friday",
    button: (
      <WebButton
        border="plate"
        font="arial"
        background="#3a2a1a"
        color="#d0a060"
      >
        <SkullIcon className="size-5" />
        <span className="text-[11px] tracking-widest">FRAG</span>
        <WebButtonNow />
      </WebButton>
    ),
  },
  {
    id: "emacs-now",
    category: "now",
    tip: "It's an operating system, really",
    button: (
      <WebButton border="plate" font="dos" background="#1a0033" color="#c080ff">
        <TerminalIcon className="size-4" />
        <span>M-x now</span>
        <WebButtonNow />
      </WebButton>
    ),
  },
  {
    id: "music-now",
    category: "now",
    tip: "MIDI auto-plays on load. Sorry.",
    button: (
      <WebButton
        border="plate"
        font="verdana"
        background="#ffffff"
        color="#008000"
      >
        <MusicIcon className="size-4" />
        <WebButtonLabel top="hear the">MIDI</WebButtonLabel>
      </WebButton>
    ),
  },
  {
    id: "game-now",
    category: "now",
    tip: "Shareware episode 1 is free",
    button: (
      <WebButton
        border="plate"
        font="pixel"
        background="linear-gradient(180deg,#004000,#000)"
        color="#00ff40"
      >
        <Gamepad2Icon className="size-4" />
        <span>Play</span>
        <WebButtonNow />
      </WebButton>
    ),
  },

  // MARK: Get it
  {
    id: "get-ui98",
    category: "get",
    tip: "pnpm i ui98",
    button: (
      <WebButton border="plate" font="verdana" background={silver} color="#000">
        <WebButtonStrip>get</WebButtonStrip>
        <WebButtonLabel top="pnpm i">ui98</WebButtonLabel>
      </WebButton>
    ),
  },
  {
    id: "get-plugin",
    category: "get",
    tip: "Required for the intro animation",
    button: (
      <WebButton
        border="plate"
        font="verdana"
        background="#ffffff"
        color="#c00000"
      >
        <WebButtonStrip background="#c00000">get</WebButtonStrip>
        <ZapIcon className="size-4" />
        <WebButtonLabel top="the">Plug-in</WebButtonLabel>
      </WebButton>
    ),
  },
  {
    id: "get-player",
    category: "get",
    tip: "Streams at 16 kbps",
    button: (
      <WebButton border="plate" font="arial" background={navy} color="#fff">
        <WebButtonStrip background="#ffcc00" color="#000">
          free
        </WebButtonStrip>
        <RadioIcon className="size-4" />
        <WebButtonLabel top="Real">Player</WebButtonLabel>
      </WebButton>
    ),
  },
  {
    id: "get-viewer",
    category: "get",
    tip: "Open .doc files without the full suite",
    button: (
      <WebButton
        border="plate"
        font="verdana"
        background={silver}
        color="#006000"
      >
        <WebButtonStrip background="#006000">get</WebButtonStrip>
        <EyeIcon className="size-4" />
        <WebButtonLabel top="Doc">Viewer</WebButtonLabel>
      </WebButton>
    ),
  },
  {
    id: "get-email",
    category: "get",
    tip: "Free web mail, 2 MB inbox",
    button: (
      <WebButton
        border="plate"
        font="verdana"
        background="linear-gradient(180deg,#5a7cff,#2040c0)"
        color="#fff"
      >
        <MailIcon className="size-4" />
        <WebButtonLabel top="Get your">E-Mail</WebButtonLabel>
      </WebButton>
    ),
  },
  {
    id: "get-sheep",
    category: "get",
    tip: "A sheep that walks on your desktop",
    button: (
      <WebButton
        border="plate"
        font="verdana"
        background="#e8ffe8"
        color="#000"
      >
        <WebButtonStrip background="#008000">get</WebButtonStrip>
        <SmileIcon className="size-4" />
        <WebButtonLabel top="eSheep">Now!</WebButtonLabel>
      </WebButton>
    ),
  },
  {
    id: "get-free-stuff",
    category: "get",
    tip: "Screensavers, cursors and fonts",
    button: (
      <WebButton
        border="plate"
        font="arial"
        background="linear-gradient(180deg,#ffff80,#ffcc00)"
        color="#c00000"
      >
        <DownloadIcon className="size-4" />
        <WebButtonLabel top="Amazing">FREE!!</WebButtonLabel>
      </WebButton>
    ),
  },
  {
    id: "get-screensaver",
    category: "get",
    tip: "Flying toasters not included",
    button: (
      <WebButton border="plate" font="pixel" background={black} color="#ffcc00">
        <WebButtonStrip background="#ffcc00" color="#000">
          new
        </WebButtonStrip>
        <SparklesIcon className="size-4" />
        <span>Screen saver</span>
      </WebButton>
    ),
  },

  // MARK: Anti
  {
    id: "no-frames",
    category: "anti",
    tip: "This site is 100% frame-free",
    button: (
      <WebButton
        border="plate"
        font="verdana"
        background="#ffffff"
        color="#c00000"
      >
        <BanIcon className="size-4" />
        <WebButtonLabel top="Frames">SUCK</WebButtonLabel>
      </WebButton>
    ),
  },
  {
    id: "no-spam",
    category: "anti",
    tip: "Your address is safe here",
    button: (
      <WebButton
        border="double"
        font="pixel"
        background="#ffff00"
        color="#c00000"
      >
        <span>No spam!</span>
      </WebButton>
    ),
  },
  {
    id: "no-cookies",
    category: "anti",
    tip: "Not a single cookie on this page",
    button: (
      <WebButton border="plate" font="verdana" background={silver} color="#000">
        <CookieIcon className="size-4 text-[#804000]" />
        <WebButtonLabel top="no">cookies</WebButtonLabel>
      </WebButton>
    ),
  },
  {
    id: "no-nags",
    category: "anti",
    tip: "No pop-ups, no nag screens",
    button: (
      <WebButton border="plate" font="arial" background={black} color="#ff3030">
        <WebButtonLabel top="Campaign against">POP-UPS</WebButtonLabel>
      </WebButton>
    ),
  },
  {
    id: "blink-tag",
    category: "anti",
    tip: "Ban the <blink> tag",
    button: (
      <WebButton border="plate" font="dos" background="#ffffff" color="#000">
        <span className="animate-pulse text-[#c00000]">&lt;BLINK&gt;</span>
        <span>no!</span>
      </WebButton>
    ),
  },
  {
    id: "bsod",
    category: "anti",
    tip: "A fatal exception 0E has occurred",
    button: (
      <WebButton border="plate" font="dos" background="#0000aa" color="#ffffff">
        <span className="bg-[#c0c0c0] px-0.5 text-[#0000aa]">ERR</span>
        <span>get BSOD</span>
      </WebButton>
    ),
  },
  {
    id: "bug-free",
    category: "anti",
    tip: "Tested on two whole browsers",
    button: (
      <WebButton
        border="plate"
        font="verdana"
        background="#e0ffe0"
        color="#006000"
      >
        <BugIcon className="size-4" />
        <WebButtonLabel top="100% bug">FREE*</WebButtonLabel>
      </WebButton>
    ),
  },

  // MARK: Badges
  {
    id: "best-viewed",
    category: "badge",
    tip: "Seriously, any of them",
    button: (
      <WebButton border="plate" font="verdana" background={silver} color="#000">
        <WebButtonLabel top="Best viewed with any">BROWSER</WebButtonLabel>
      </WebButton>
    ),
  },
  {
    id: "800x600",
    category: "badge",
    tip: "Maximize your window",
    button: (
      <WebButton
        border="plate"
        font="arial"
        background="linear-gradient(90deg,#000080,#0000ff)"
        color="#fff"
      >
        <WebButtonLabel top="Best viewed">800 x 600</WebButtonLabel>
      </WebButton>
    ),
  },
  {
    id: "valid-html",
    category: "badge",
    tip: "Validated, probably",
    button: (
      <WebButton
        border="plate"
        font="verdana"
        background="#ffffff"
        color="#000080"
      >
        <WebButtonTag background="#000080" color="#ffcc00">
          <ShieldCheckIcon className="size-4" />
        </WebButtonTag>
        <WebButtonLabel top="valid">HTML 3.2</WebButtonLabel>
      </WebButton>
    ),
  },
  {
    id: "notepad",
    category: "badge",
    tip: "No WYSIWYG editors were harmed",
    button: (
      <WebButton
        border="plate"
        font="verdana"
        background="#ffffff"
        color="#000"
      >
        <WebButtonLabel top="made with">Notepad</WebButtonLabel>
        <SaveIcon className="size-4 text-[#000080]" />
      </WebButton>
    ),
  },
  {
    id: "y2k",
    category: "badge",
    tip: "Tested and certified",
    button: (
      <WebButton
        border="double"
        font="arial"
        background="#ff0000"
        color="#ffff00"
      >
        <WebButtonLabel top="certified">Y2K READY</WebButtonLabel>
      </WebButton>
    ),
  },
  {
    id: "486",
    category: "badge",
    tip: "Built on a 486 DX2/66",
    button: (
      <WebButton border="plate" font="dos" background={black} color="#00ff40">
        <CpuIcon className="size-4" />
        <WebButtonLabel top="made on a">486 DX2</WebButtonLabel>
      </WebButton>
    ),
  },
  {
    id: "coffee",
    category: "badge",
    tip: "Fuelled by 14 cups a day",
    button: (
      <WebButton
        border="plate"
        font="times"
        background="#4a2a10"
        color="#ffe0a0"
      >
        <CoffeeIcon className="size-4" />
        <WebButtonLabel top="powered by">coffee</WebButtonLabel>
      </WebButton>
    ),
  },
  {
    id: "construction",
    category: "badge",
    tip: "Pardon our dust",
    button: (
      <WebButton
        border="plate"
        font="pixel"
        background="repeating-linear-gradient(45deg,#ffcc00 0 6px,#000 6px 12px)"
        color="#ffcc00"
      >
        <HammerIcon className="size-4 bg-black p-0.5" />
        <span className="bg-black px-1">Under constr.</span>
      </WebButton>
    ),
  },
  {
    id: "cd-rom",
    category: "badge",
    tip: "Also available on CD-ROM",
    button: (
      <WebButton
        border="plate"
        font="verdana"
        background="linear-gradient(135deg,#ff80ff,#80ffff,#ffff80)"
        color="#000"
      >
        <DiscIcon className="size-4" />
        <WebButtonLabel top="also on">CD-ROM</WebButtonLabel>
      </WebButton>
    ),
  },
  {
    id: "handmade",
    category: "badge",
    tip: "Every pixel placed by hand",
    button: (
      <WebButton
        border="plate"
        font="times"
        background="#fff0f0"
        color="#c00060"
      >
        <HeartIcon className="size-4 fill-current" />
        <WebButtonLabel top="made with">love</WebButtonLabel>
      </WebButton>
    ),
  },

  // MARK: Sites
  {
    id: "guestbook",
    category: "site",
    tip: "Please please please",
    button: (
      <WebButton
        border="plate"
        font="verdana"
        background="#ffff00"
        color="#0000ee"
      >
        <BookOpenIcon className="size-4" />
        <WebButtonLabel top="sign my">GBOOK</WebButtonLabel>
      </WebButton>
    ),
  },
  {
    id: "email-me",
    category: "site",
    tip: "webmaster@ui98.example",
    button: (
      <WebButton
        border="plate"
        font="verdana"
        background="linear-gradient(180deg,#80ffff,#00c0c0)"
        color="#000"
      >
        <MailIcon className="size-4" />
        <WebButtonLabel top="e-mail">ME!</WebButtonLabel>
      </WebButton>
    ),
  },
  {
    id: "top-100",
    category: "site",
    tip: "Vote for us daily",
    button: (
      <WebButton border="plate" font="arial" background={navy} color="#ffcc00">
        <TrophyIcon className="size-4" />
        <WebButtonLabel top="cool site">TOP 100</WebButtonLabel>
      </WebButton>
    ),
  },
  {
    id: "hot",
    category: "site",
    tip: "Updated every Sunday",
    button: (
      <WebButton
        border="plate"
        font="arial"
        background="linear-gradient(180deg,#ffcc00,#ff3000)"
        color="#fff"
      >
        <FlameIcon className="size-4" />
        <WebButtonLabel top="it's">HOT!</WebButtonLabel>
      </WebButton>
    ),
  },
  {
    id: "webring",
    category: "site",
    tip: "« prev | random | next »",
    button: (
      <WebButton border="plate" font="pixel" background={black} color="#ff40ff">
        <StarIcon className="size-4 fill-current" />
        <span>Webring member</span>
      </WebButton>
    ),
  },
  {
    id: "haunted",
    category: "site",
    tip: "Enter if you dare",
    button: (
      <WebButton
        border="plate"
        font="times"
        background="#200030"
        color="#c0ff00"
      >
        <GhostIcon className="size-4" />
        <WebButtonLabel top="the haunted">PAGE</WebButtonLabel>
      </WebButton>
    ),
  },
  {
    id: "link-to-me",
    category: "site",
    tip: "Right-click, Save Picture As...",
    button: (
      <WebButton
        border="plate"
        font="verdana"
        background={black}
        color="#00ff40"
      >
        <WebButtonLabel top="link to">ME!</WebButtonLabel>
      </WebButton>
    ),
  },
  {
    id: "freebies",
    category: "site",
    tip: "Free home pages, 2 MB each",
    button: (
      <WebButton
        border="plate"
        font="arial"
        background="linear-gradient(180deg,#80c0ff,#0060c0)"
        color="#fff"
      >
        <WebButtonStrip background="#ffcc00" color="#000">
          free
        </WebButtonStrip>
        <WebButtonLabel top="your own">Home Page</WebButtonLabel>
      </WebButton>
    ),
  },
]
