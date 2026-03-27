import React from 'react'

const part1 = () => {
  return (
    <>
      <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-neutral-primary-soft border-t border-default">
  <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
    <button type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-neutral-secondary-medium group">
      <svg className="w-6 h-6 mb-1 text-body group-hover:text-fg-brand" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5" /></svg>
      <span className="text-sm text-body group-hover:text-fg-brand">Home</span>
    </button>
    <button type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-neutral-secondary-medium group">
      <svg className="w-6 h-6 mb-1 text-body group-hover:text-fg-brand" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8H5m12 0a1 1 0 0 1 1 1v2.6M17 8l-4-4M5 8a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.6M5 8l4-4 4 4m6 4h-4a2 2 0 1 0 0 4h4a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1Z" /></svg>
      <span className="text-sm text-body group-hover:text-fg-brand">Wallet</span>
    </button>
    <button type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-neutral-secondary-medium group">
      <svg className="w-6 h-6 mb-1 text-body group-hover:text-fg-brand" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeWidth={2} d="M6 4v10m0 0a2 2 0 1 0 0 4m0-4a2 2 0 1 1 0 4m0 0v2m6-16v2m0 0a2 2 0 1 0 0 4m0-4a2 2 0 1 1 0 4m0 0v10m6-16v10m0 0a2 2 0 1 0 0 4m0-4a2 2 0 1 1 0 4m0 0v2" /></svg>
      <span className="text-sm text-body group-hover:text-fg-brand">Settings</span>
    </button>
    <button type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-neutral-secondary-medium group">
      <svg className="w-6 h-6 mb-1 text-body group-hover:text-fg-brand" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 13 16h-2a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 12 21Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /></svg>
      <span className="text-sm text-body group-hover:text-fg-brand">Profile</span>
    </button>
  </div>
</div>







<div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Card Title</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>






<div className="card lg:card-side bg-base-100 shadow-sm">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
      alt="Album" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">New album is released!</h2>
    <p>Click the button to listen on Spotiwhy app.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Listen</button>
    </div>
  </div>
</div>

    </>
  )
}

export default part1
