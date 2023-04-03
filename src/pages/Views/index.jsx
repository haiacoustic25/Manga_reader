import React from 'react';
import LayoutFull from '../../components/Layout';
import '../../assets/styles/views.css';
import { FaSearch } from '@react-icons/all-files/fa/FaSearch';
import { FaCaretRight } from '@react-icons/all-files/fa/FaCaretRight';
import { FaFacebookF } from '@react-icons/all-files/fa/FaFacebookF';
import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter';
import { FaRedditAlien } from '@react-icons/all-files/fa/FaRedditAlien';
import { FaTelegramPlane } from '@react-icons/all-files/fa/FaTelegramPlane';
import { FaPlus } from '@react-icons/all-files/fa/FaPlus';
import { TiTick } from '@react-icons/all-files/ti/TiTick';
import { Link } from 'react-router-dom';

const data = [
  {
    key: 1,
    title: 'Mangareader.to - Read Manga Online Free',
    children: [
      {
        key: 1,
        content: `Are you looking to read manga online at no cost? Or are you subscribing to a paid
    reading service already but in hopes of saving up? Or are you feeling unsafe on the
    current free manga site? If you can relate to any of these questions, you will find
    the solution here, on MangaReader.`,
      },
      {
        key: 2,
        content: `If you search about Reading manga on Google, one of the first autocomplete predictions is “Why manga
        is so expensive?”. Yes, not everyone can afford to read their favorite manga online and MangaReader
        is created to change it. We are here to make sure all manga lovers can have access to their manga of
        interest. And that is why MangaReader is free and safe.`,
      },
    ],
  },
  {
    key: 2,
    title: 'How To Read Manga online?',
    children: [
      {
        key: 1,
        content: `As manga originates from Japan, the easiest way to read it is to know the language. However, as you
        are here, we assume that Japanese might not be one of the languages you can read proficiently. But
        don't sweat it, all mangas on MangaReader are in English for your convenience.`,
      },
      {
        key: 2,
        content: `Reading manga can be different from reading a comic, book, or magazine, especially when it is
        traditional Japanese manga. The main reason for this is that kanji, the Japanese writing, is read
        right to left. So when you pick up a manga volume to read, you need to start with the frame (a.k.a
        koma) in the upper right-hand corner and end a page with the koma in the bottom left-hand corner.
        Most publishers retain the original format of the manga; therefore, it is important to know this
        first rule.`,
      },
    ],
  },
  {
    key: 3,
    title: 'Where To Read Manga For Free?',
    children: [
      {
        key: 1,
        content: `Despite growing demand, manga is not easily available outside of Japan and once they are, they are
        expensive. It makes total sense as they are copyrighted audiovisual products/translated works. In
        the US, mangas cost you from 8 to 20 USD, sometimes more. Not everyone can afford to pay such a
        large amount of money for a volume unless their hobby is to collect manga. But as we stated above,
        MangaReader is created in hopes that every manga fan can get to read manga without paying a dime,
        this site is completely free of charge. To read manga online for free, all you need to do is to
        visit MangaReader, search for the manga you want to watch, and enjoy reading it at no cost and with
        no risk.`,
      },
    ],
  },
  {
    key: 4,
    title: 'What Is MangaReader?',
    children: [
      {
        key: 1,
        content: `MangaReader is an ad-free manga site that allows users to read and download thousands of manga for
        free. MangaReader has one of the largest databases of manga covering all genres and subgenres with
        numerous topics and themes. Apart from an extensive content library, MangaReader also provides free
        users with premium quality features that might be costly elsewhere.`,
      },
      {
        key: 2,
        content: `Reading manga online for free on MangaReader is as easy as searching on Google. All you need to do is
        to visit the site link https://mangareader.to/,
        use the search bar to look for the manga of interest, click the Start Reading button and you are all
        set. There is no limit applied; therefore, you can enjoy as much manga as you wish without any
        worries. Here is a detailed list of the features provided for free on the site:`,
      },
    ],
    list: [
      {
        key: 1,
        content: 'Safe to use.',
      },
      {
        key: 2,
        content: 'Various genres and subgenres.',
      },
      {
        key: 3,
        content: 'High-quality scans.',
      },
      {
        key: 4,
        content: 'Anti-overload with back-up server.',
      },
      {
        key: 5,
        content: 'Fast content updates.',
      },
      {
        key: 7,
        content: 'Surpass Geo-restrictions.',
      },
      {
        key: 8,
        content: 'Easy and simple UI & UX.',
      },
      {
        key: 9,
        content: 'Sharable content on all your socials.',
      },
      {
        key: 10,
        content: 'Syncs content across PCs and mobile devices.',
      },
      {
        key: 11,
        content: 'Unlimited reading service available.',
      },
      {
        key: 12,
        content: 'Themes changing as you wish between dark and light.',
      },
      {
        key: 13,
        content: 'No registration or account needed.',
      },
      {
        key: 14,
        content: 'Best customer service..',
      },
    ],
  },
  {
    key: 5,
    title: 'Is MangaReader Safe To Read Manga Online?',
    children: [
      {
        key: 1,
        content: `Reading manga is a time-consuming hobby and it should only be done on a safe and secure site. While
        most free manga sites are filled with ads and pop-ups, MangaReader is completely ad-free. We are
        dedicated to bringing you a risk-free reading experience, therefore, no ads, pop-ups, or commercials
        are existent on the site. With no ad links, hackers have no way to pose a risk to your device and
        identity. By reading manga on MangaReader, you can avoid the risk of serious headaches such as data
        loss, identity theft, corrupted networks, etc.`,
      },
      {
        key: 2,
        content: `Reading manga is a time-consuming hobby and it should only be done on a safe and secure site. While
        most free manga sites are filled with ads and pop-ups, MangaReader is completely ad-free. We are
        dedicated to bringing you a risk-free reading experience, therefore, no ads, pop-ups, or commercials
        are existent on the site. With no ad links, hackers have no way to pose a risk to your device and
        identity. By reading manga on MangaReader, you can avoid the risk of serious headaches such as data
        loss, identity theft, corrupted networks, etc.MangaReader does not require any registration or signup, meaning that users are not obliged to
        provide their information such as full name, email address, credit card details, etc to have full
        access to the site’s content library and features. With no information shared, there will be no
        information leaked, and your identity will also be kept safe. To sum it up, MangaReader is the best
        and safest manga site that every manga lover should check out.`,
      },
    ],
  },
  {
    key: 6,
    title: 'Is MangaReader Has Manga App Version?',
    children: [
      {
        key: 1,
        content: `A manga reader app for your convenience will be completed soon. Please follow us on Social Network
        accounts to be most updated about the app.`,
      },
    ],
  },
];

const Views = () => {
  return (
    <LayoutFull colorFooter="white" isSearch={false}>
      <div id="home">
        <div className="top-home">
          <div className="top-home__search">
            <div className="top-home__search-input">
              <input type="text" placeholder="Search manage..." />
            </div>
            <div className="top-home__search-btn">
              <FaSearch style={{ color: '#fff', fontSize: '20px' }} />
            </div>
          </div>
          <div className="xbuttons">
            <Link to="/home" className="top-home__btn">
              Go to homepage <FaCaretRight className="top-home__btn-action" />
            </Link>
          </div>
        </div>
        <div className="container-home">
          <div className="container">
            <div className="social-home-block">
              <div className="social-home-block-infor">
                <div className="shb-icon"></div>
                <div className="shb-left">
                  <strong>Share Mangareader</strong> to your friends
                </div>
              </div>
              <div className="at-share-btn-elements">
                <div className="at-share-btn" style={{ backgroundColor: 'rgb(59, 89, 152)' }}>
                  <FaFacebookF style={{ color: '#fff', fontSize: '15px' }} />
                  <span>Facebook</span>
                </div>
                <div className="at-share-btn" style={{ backgroundColor: 'rgb(29, 161, 242)' }}>
                  <FaTwitter style={{ color: '#fff', fontSize: '15px' }} />
                  <span>Twitter</span>
                </div>
                <div className="at-share-btn" style={{ backgroundColor: 'rgb(255, 87, 0)' }}>
                  <FaRedditAlien style={{ color: '#fff', fontSize: '15px' }} />
                  <span>Reddit</span>
                </div>
                <div className="at-share-btn" style={{ backgroundColor: 'rgb(0, 136, 204)' }}>
                  <FaTelegramPlane style={{ color: '#fff', fontSize: '15px' }} />
                  <span>Telegram</span>
                </div>
                <div className="at-share-btn" style={{ backgroundColor: 'rgb(255, 101, 80)' }}>
                  <FaPlus style={{ color: '#fff', fontSize: '15px' }} />
                  <span>More</span>
                </div>
              </div>
            </div>
            {data.map((item) => (
              <div className="container-home__content">
                <h1 className="container-home__content--title">{item.title}</h1>
                {item.children.map((_) => (
                  <p style={{ marginBottom: '1rem' }}>{_.content}</p>
                ))}
                {item.list && (
                  <ul className="ulclear checked-list">
                    {item.list.map((_) => (
                      <li>
                        <TiTick />
                        {_.content}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </LayoutFull>
  );
};

export default Views;
