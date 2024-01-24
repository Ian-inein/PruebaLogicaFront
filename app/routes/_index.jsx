import { useEffect, useState } from 'react';

export default function Index() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://rickandmortyapi.com/api/character');
      const data = await response.json();
      setCharacters(data.results);
    }
    fetchData();
  }, []);

  return (
    <div className='bg-gradient-to-tl from-slate-600 to-slate-900 screen'>
      <h1 className='text-white text-4xl font-thin text-center py-5'>
        Planetas Rick & Morty
      </h1>

      <div
        className='grid sm:grid-cols-2 md:grid-cols-3 gap-6   p-5'
        style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.8' }}
      >
        {characters.map((e) => (
          <div className='text-white grid place-content-center ' key={e.id}>
            <button
              name='location'
              value={e.location.url}
              onClick={() => setState(e.id)}
              className='group'
            >
              <div className='overflow-hidden rounded-lg'>
                <img
                  className='group-hover:scale-105 transition-all'
                  src={e.image}
                  alt=''
                />
              </div>
              <div>
                <span className='font-bold'>{e.name}</span>
                <span className='flex gap-2 justify-center'>
                  <svg
                    className='group-hover:animate-pulse group-hover:text-green-600 transition-all'
                    stroke='currentColor'
                    fill='currentColor'
                    viewBox='0 0 512 512'
                    height='25px'
                    width='25px'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M96.85 286.62a8 8 0 0 0-12.53 8.25C102.07 373.28 172.3 432 256 432a175.31 175.31 0 0 0 52.41-8 8 8 0 0 0 .79-15 1120 1120 0 0 1-109.48-55.61 1126.24 1126.24 0 0 1-102.87-66.77zm395.87 52.89c-4.19-5.58-9.11-11.44-14.7-17.53a15.83 15.83 0 0 0-26.56 5.13c0 .16-.11.31-.17.47a15.75 15.75 0 0 0 3.15 16.06c22.74 25 26.42 38.51 25.48 41.36-2 2.23-17.05 6.89-58.15-3.53q-8.83-2.24-19.32-5.46-6.76-2.08-13.79-4.49a176.76 176.76 0 0 0 19.54-27.25c.17-.29.35-.58.52-.88A175.39 175.39 0 0 0 432 256a178.87 178.87 0 0 0-1-19c-9.57-88.17-84.4-157-175-157a175.37 175.37 0 0 0-106.4 35.89 177.4 177.4 0 0 0-45.83 51.84c-.16.29-.34.58-.51.87a175.48 175.48 0 0 0-13.83 30.52q-5.59-4.87-10.79-9.67c-5.39-5-10.17-9.63-14.42-14-29.57-30.26-33.09-45.61-32.16-48.45 2-2.23 15.54-5.87 48.62 1.31A15.82 15.82 0 0 0 96.22 123l.36-.44a15.74 15.74 0 0 0-8.67-25.43A237.38 237.38 0 0 0 64.13 93c-30.72-3.53-50.83 2.52-59.78 18-3.24 5.58-6.35 15.09-2.72 28.6C7 159.66 26.14 184 53.23 209.5c8.63 8.13 18.06 16.37 28.12 24.64 7.32 6 15 12.06 22.9 18.08q7.91 6 16.15 12T137.1 276c25.41 17.61 52.26 34.52 78.59 49.69q14.34 8.26 28.64 16t28.37 14.81c21.9 11 43.35 20.92 63.86 29.43q13.19 5.48 25.81 10.16c11.89 4.42 23.37 8.31 34.31 11.59l1.1.33c25.73 7.66 47.42 11.69 64.48 12H464c21.64 0 36.3-6.38 43.58-19 9.09-15.62 4.08-36.32-14.86-61.5z'></path>
                  </svg>
                  <span className='font-normal group-hover:text-green-600 transition-all'>
                    {e.location?.name}
                  </span>
                </span>
              </div>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
