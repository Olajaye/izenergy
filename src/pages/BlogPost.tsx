import { useTheme } from "../stores/themeStore";


const BlogPost = () => {
  const { isDark } = useTheme();
  return (
    <div className={`min-h-screen ${isDark ? 'bg-background' : 'bg-text'}`}>
      {/* Hero Section */}
      <div className="relative pt-24">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1920"
            alt="Service Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/70" />
        </div>
        <div className="relative container mx-auto px-4 py-24">
          <h1 className="text-4xl md:text-5xl font-bold text-text mb-4">
            Blog
          </h1>
          <p className="text-xl text-text-dark max-w-2xl">
            Comprehensive energy solutions tailored to your needs, backed by expert consultation and professional installation.
          </p>
        </div>
      </div>
    


      <div className="container mx-auto p-6 bg-ecf3f0 text-black font-Inter">
        <h1 className="text-4xl font-bold mb-4 text-21a663">My Blog Post Title</h1>
        <p className="text-lg mb-6 text-gray-800">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis
          egestas eros, at tincidunt nisi tincidunt ac. Cras convallis ipsum id
          justo cursus, vel bibendum mi blandit.
        </p>
        <h2 className="text-2xl font-semibold mb-4 text-003d07">Introduction</h2>
        <p className="mb-4 text-gray-700">
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
          cubilia curae; Suspendisse potenti. Sed tincidunt, nisl eu tristique
          tincidunt, tortor eros aliquet metus, in malesuada nisi arcu vel nulla.
        </p>
        <h2 className="text-2xl font-semibold mb-4 text-003d07">Main Content</h2>
        <p className="mb-4 text-gray-700">
          Quisque at sapien vel leo fringilla interdum non non neque. Fusce
          pharetra, dui in dictum convallis, nulla orci tristique elit, et
          suscipit est augue sit amet elit.
        </p>
        <h2 className="text-2xl font-semibold mb-4 text-003d07">Conclusion</h2>
        <p className="mb-4 text-gray-700">
          Morbi dapibus sapien id purus suscipit, a sollicitudin purus egestas.
          Integer id metus a magna bibendum feugiat eu et sem.
        </p>
        <div className="mt-6 p-4 bg-b6f7bc border-l-4 border-21a663 text-003d07">
          <p className="italic">
            "This is a quote or a highlight from the blog post."
          </p>
        </div>
      </div>
    </div>
  )
  
}


export default BlogPost