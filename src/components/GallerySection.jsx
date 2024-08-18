import React from "react"

function GallerySection() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-extrabold text-blue-900">Gallery</h2>
        <p className="mt-4 text-lg text-gray-700">
          Explore our collection of images that showcase the features and
          benefits of Job Journey.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="h-64 w-full overflow-hidden rounded-lg bg-blue-400">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu3XuKRsJQ1GHeBcf1YKpz421-JHUkm6zd8g&s"
              alt="Gallery"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="h-64 w-full overflow-hidden rounded-lg bg-blue-400">
            <img
              src="https://news.microsoft.com/wp-content/uploads/prod/sites/388/2018/07/Hero_GIF_1600x900-5b5b597489589-1024x576.gif"
              alt="Gallery"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="h-64 w-full overflow-hidden rounded-lg bg-blue-400">
            <img
              src="https://img.lovepik.com/background/20211022/large/lovepik-mobile-application-background-image_500615794.jpg"
              alt="Gallery"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="h-64 w-full overflow-hidden rounded-lg bg-blue-400">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLrMWjFkcbiD6Ax0HEP8td1_VeZBNttUhyWg&s"
              alt="Gallery"
              className="h-full w-full object-fill"
            />
          </div>
          <div className="h-64 w-full overflow-hidden rounded-lg bg-blue-400">
            <img
              src="https://img.freepik.com/free-vector/clean-step-ladder-reaches-glowing-light-bulb-represent-idea-concept-vector-illustration_1017-40977.jpg"
              alt="Gallery"
              className="h-full w-full object-fill"
            />
          </div>
          <div className="h-64 w-full overflow-hidden rounded-lg bg-blue-400">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_dxEhaGVLcjeZ01qxh0x-fOjiDyROc7feqw&s"
              alt="Gallery"
              className="h-full w-full object-fill"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default GallerySection
