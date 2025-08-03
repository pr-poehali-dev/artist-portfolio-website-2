import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Index() {
  const artworks = [
    {
      id: 1,
      title: "Абстрактная композиция",
      price: "45,000 ₽",
      image: "/img/51e728f0-9466-4e9d-9c41-486e0f80bdd1.jpg",
      medium: "Холст, масло",
      size: "80×60 см"
    },
    {
      id: 2,
      title: "Цветы в вазе",
      price: "32,000 ₽",
      image: "/img/6478d975-b465-4bfa-9e62-aee76763bd70.jpg",
      medium: "Холст, масло",
      size: "70×50 см"
    },
    {
      id: 3,
      title: "Портрет",
      price: "75,000 ₽",
      image: "/img/6948fae1-d24b-4729-abb0-068a8b44dee1.jpg",
      medium: "Холст, масло",
      size: "90×70 см"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="py-12 px-6 text-center border-b border-gray-100">
        <h1 className="text-5xl font-serif text-black mb-4 font-light tracking-wide">
          Анна Белова
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Современный художник, работающий в жанре абстракции и импрессионизма. 
          Создаю произведения, которые говорят с душой через цвет и форму.
        </p>
      </header>

      {/* Main Gallery */}
      <main className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-serif text-black mb-12 text-center font-light">
            Галерея работ
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {artworks.map((artwork) => (
              <Card key={artwork.id} className="group border-0 shadow-none bg-white">
                <div className="aspect-[4/5] overflow-hidden mb-6 bg-gray-50">
                  <img 
                    src={artwork.image}
                    alt={artwork.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-xl font-serif text-black font-medium">
                    {artwork.title}
                  </h3>
                  
                  <div className="text-sm text-gray-500 space-y-1">
                    <p>{artwork.medium}</p>
                    <p>{artwork.size}</p>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4">
                    <span className="text-lg font-medium text-black">
                      {artwork.price}
                    </span>
                    
                    <Button 
                      className="bg-black text-white hover:bg-gray-800 px-6 py-2 text-sm font-medium"
                    >
                      Купить
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>

      {/* About Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif text-black mb-8 font-light">
            О художнике
          </h2>
          
          <div className="prose prose-lg max-w-3xl mx-auto text-gray-700 leading-relaxed">
            <p className="mb-6">
              Анна Белова — современный художник, окончившая Московский художественный институт 
              имени В.И. Сурикова. В своих работах исследует границы между абстракцией и реализмом, 
              создавая произведения, которые приглашают зрителя к диалогу.
            </p>
            
            <p>
              Работы Анны находятся в частных коллекциях России, Европы и США. 
              Регулярно участвует в выставках современного искусства и арт-резиденциях.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center space-y-8">
            <h3 className="text-xl font-serif text-black font-medium">
              Связаться с художником
            </h3>
            
            <div className="flex space-x-8">
              <a 
                href="https://instagram.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-600 hover:text-black transition-colors"
              >
                <Icon name="Instagram" size={20} />
                <span>Instagram</span>
              </a>
              
              <a 
                href="https://facebook.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-600 hover:text-black transition-colors"
              >
                <Icon name="Facebook" size={20} />
                <span>Facebook</span>
              </a>
              
              <a 
                href="mailto:hello@annabelova.art" 
                className="flex items-center space-x-2 text-gray-600 hover:text-black transition-colors"
              >
                <Icon name="Mail" size={20} />
                <span>Email</span>
              </a>
            </div>
            
            <div className="text-center text-sm text-gray-500">
              <p>© 2024 Анна Белова. Все права защищены.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}