"use client"

import { faAngleLeft, faCamera, faEllipsisVertical, faLaughSquint, faPaperPlane, faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen sm:py-2 bg-gradient-to-r from-green-400 to-green-600">
      <div className="flex flex-col flex-grow w-full max-w-xl bg-gray-100 shadow-md rounded-lg overflow-hidden border-b-4 border-green-600">
        {/* Header */}
        <div className="flex py-2 px-4 items-center space-x-2 bg-green-600 text-gray-200">
          <div className="flex flex-shrink-0 items-center h-8 w-8 rounded-full text-white">
            <FontAwesomeIcon className="mx-auto text-lg" icon={faAngleLeft} />
          </div>
          <div className="flex-shrink-0 h-8 w-8 rounded-full bg-gray-200"></div>
          <div className="grow">
            <h1 className="text-base font-bold text-white">Chatify Demo</h1>
            <h3 className="text-xs text-gray-200">Chatify is a real-time...</h3>
          </div>
          <div className="flex flex-shrink-0 items-center h-8 w-8 rounded-full text-white">
            <FontAwesomeIcon className="mx-auto text-lg" icon={faEllipsisVertical} />
          </div>
        </div>

        {/* Body */}
        <div className="flex flex-col flex-col-reverse flex-grow h-0 p-4 overflow-auto">
          {
            [1, 2, 3, 4, 5].map((e) => (
              <div key={e} className="flex w-full mt-2 space-x-3 max-w-xs">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
                <div className="space-y-2">
                  <div className="bg-white shadow-md p-3 rounded-r-lg rounded-bl-lg">
                    <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
                  <span className="flex text-xs text-gray-500 leading-none">2 min ago</span>
                </div>
              </div>
            ))
          }
          <div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
            <div className="space-y-2">
              <div className="bg-green-500 shadow-md text-white p-3 rounded-l-lg rounded-br-lg">
                <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
              </div>
              <span className="flex text-xs text-gray-500 leading-none justify-end">2 min ago</span>
            </div>
            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex py-2 px-4 items-center space-x-2">
          <div className="flex items-center w-full rounded-full px-3 text-sm bg-white shadow-md p-2 space-x-2">
            <div className="flex flex-shrink-0 items-center h-8 w-8 rounded-full text-gray-400">
              <FontAwesomeIcon className="mx-auto text-xl" icon={faLaughSquint} />
            </div>
            <div className="grow">
              <input className="w-full bg-transparent py-1.5 px-2 rounded-full" type="text" placeholder="Type your message…" />
            </div>
            <div className="flex flex-shrink-0 items-center h-8 w-8 rounded-full text-gray-400">
              <FontAwesomeIcon className="mx-auto text-xl" icon={faPaperclip} />
            </div>
            <div className="flex flex-shrink-0 items-center h-8 w-8 rounded-full text-gray-400">
              <FontAwesomeIcon className="mx-auto text-xl" icon={faCamera} />
            </div>
          </div>
          <div className="flex flex-shrink-0 items-center h-12 w-12 rounded-full bg-green-500 shadow-md text-white">
            <FontAwesomeIcon className="mx-auto text-xl" icon={faPaperPlane} />
          </div>
        </div>
      </div>
    </main>
  )
}
