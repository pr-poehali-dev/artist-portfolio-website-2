import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

export default function Index() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const artworks = [
    {
      id: 1,
      title: "Закат над Чёрным морем",
      price: 45000,
      priceFormatted: "45,000 ₽",
      image: "/img/211fd05d-26c8-46c6-bfa7-8d3d8a97a000.jpg",
      medium: "Холст, масло",
      size: "80×60 см",
      description: "Тёплые краски крымского заката отражаются в морских волнах, создавая атмосферу умиротворения и гармонии."
    },
    {
      id: 2,
      title: "Лазурный берег",
      price: 32000,
      priceFormatted: "32,000 ₽",
      image: "/img/d00f3874-45d2-45a6-9eba-b38f2646c530.jpg",
      medium: "Холст, масло",
      size: "70×50 см",
      description: "Солнечный день на побережье Крыма, где каждая волна несёт в себе частичку южного тепла."
    },
    {
      id: 3,
      title: "Морская идиллия",
      price: 75000,
      priceFormatted: "75,000 ₽",
      image: "/img/0851503e-b6d8-490e-8051-7039210d76f5.jpg",
      medium: "Холст, масло",
      size: "90×70 см",
      description: "Парусники в голубой дали символизируют свободу и мечты о бесконечных морских просторах."
    },
    // Пустые слоты для загрузки картин
    {
      id: 4,
      title: "Загрузите вашу картину",
      price: 0,
      priceFormatted: "По запросу",
      image: "",
      medium: "Различные техники",
      size: "Различные размеры",
      description: "Здесь может быть ваша картина. Нажмите, чтобы загрузить изображение.",
      isEmpty: true
    },
    {
      id: 5,
      title: "Загрузите вашу картину",
      price: 0,
      priceFormatted: "По запросу",
      image: "",
      medium: "Различные техники",
      size: "Различные размеры", 
      description: "Здесь может быть ваша картина. Нажмите, чтобы загрузить изображение.",
      isEmpty: true
    },
    {
      id: 6,
      title: "Загрузите вашу картину",
      price: 0,
      priceFormatted: "По запросу",
      image: "",
      medium: "Различные техники",
      size: "Различные размеры",
      description: "Здесь может быть ваша картина. Нажмите, чтобы загрузить изображение.",
      isEmpty: true
    }
  ];

  const addToCart = (artwork) => {
    if (artwork.isEmpty) return;
    
    const existingItem = cart.find(item => item.id === artwork.id);
    if (existingItem) {
      setCart(cart.map(item => 
        item.id === artwork.id 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...artwork, quantity: 1 }]);
    }
  };

  const removeFromCart = (artworkId) => {
    setCart(cart.filter(item => item.id !== artworkId));
  };

  const updateQuantity = (artworkId, newQuantity) => {
    if (newQuantity === 0) {
      removeFromCart(artworkId);
    } else {
      setCart(cart.map(item => 
        item.id === artworkId 
          ? { ...item, quantity: newQuantity }
          : item
      ));
    }
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const handleImageUpload = (artworkId, event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        // В реальном приложении здесь была бы логика загрузки на сервер
        console.log('Изображение загружено для слота:', artworkId);
        alert('Функция загрузки изображений будет доступна в следующей версии!');
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Fixed Cart Button */}
      <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
        <SheetTrigger asChild>
          <Button 
            className="fixed top-6 right-6 z-50 bg-black text-white hover:bg-gray-800 rounded-full p-3 shadow-lg"
          >
            <Icon name="ShoppingCart" size={24} />
            {getTotalItems() > 0 && (
              <Badge className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full min-w-[20px] h-5 flex items-center justify-center text-xs">
                {getTotalItems()}
              </Badge>
            )}
          </Button>
        </SheetTrigger>
        <SheetContent className="w-[400px] sm:w-[540px]">
          <SheetHeader>
            <SheetTitle className="text-2xl font-serif">Корзина</SheetTitle>
          </SheetHeader>
          
          <div className="mt-6 space-y-4">
            {cart.length === 0 ? (
              <div className="text-center py-12">
                <Icon name="ShoppingCart" size={48} className="mx-auto text-gray-400 mb-4" />
                <p className="text-gray-500">Корзина пуста</p>
                <p className="text-sm text-gray-400">Добавьте картины для покупки</p>
              </div>
            ) : (
              <>
                <div className="space-y-4 max-h-[400px] overflow-y-auto">
                  {cart.map((item) => (
                    <div key={item.id} className="flex gap-4 p-4 border rounded-lg">
                      <div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden">
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="font-medium text-sm">{item.title}</h3>
                        <p className="text-xs text-gray-500">{item.size}</p>
                        <p className="text-sm font-medium">{item.priceFormatted}</p>
                        
                        <div className="flex items-center gap-2 mt-2">
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 p-0"
                          >
                            -
                          </Button>
                          <span className="text-sm">{item.quantity}</span>
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 p-0"
                          >
                            +
                          </Button>
                          <Button 
                            size="sm" 
                            variant="destructive"
                            onClick={() => removeFromCart(item.id)}
                            className="ml-auto w-8 h-8 p-0"
                          >
                            <Icon name="X" size={16} />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="border-t pt-4 space-y-4">
                  <div className="flex justify-between text-lg font-medium">
                    <span>Итого:</span>
                    <span>{getTotalPrice().toLocaleString('ru-RU')} ₽</span>
                  </div>
                  
                  <Button className="w-full bg-black text-white hover:bg-gray-800">
                    Оформить заказ
                  </Button>
                </div>
              </>
            )}
          </div>
        </SheetContent>
      </Sheet>

      {/* Header */}
      <header className="py-12 px-6 text-center border-b border-gray-100">
        <h1 className="text-5xl font-serif text-black mb-4 font-light tracking-wide animate-fade-in">
          Яна Арутюнова
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed animate-fade-in">
          Художница, вдохновлённая морем, солнцем и бескрайними просторами Крыма. 
          Мои картины пропитаны солёным воздухом Севастополя.
        </p>
      </header>

      {/* Main Gallery */}
      <main className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-serif text-black mb-12 text-center font-light">
            Галерея работ
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {artworks.map((artwork, index) => (
              <Card key={artwork.id} className="group border-0 shadow-none bg-white animate-fade-in" style={{animationDelay: `${index * 200}ms`}}>
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="aspect-[4/5] overflow-hidden mb-6 bg-gray-50 cursor-pointer relative">
                      {artwork.isEmpty ? (
                        <div className="w-full h-full flex items-center justify-center border-2 border-dashed border-gray-300 hover:border-gray-400 transition-colors">
                          <div className="text-center">
                            <Icon name="ImagePlus" size={48} className="mx-auto text-gray-400 mb-2" />
                            <p className="text-sm text-gray-500">Нажмите для загрузки</p>
                            <input 
                              type="file" 
                              accept="image/*"
                              onChange={(e) => handleImageUpload(artwork.id, e)}
                              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                            />
                          </div>
                        </div>
                      ) : (
                        <img 
                          src={artwork.image}
                          alt={artwork.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      )}
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl w-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="aspect-square overflow-hidden rounded-lg">
                        {artwork.isEmpty ? (
                          <div className="w-full h-full flex items-center justify-center bg-gray-50 border-2 border-dashed border-gray-300">
                            <div className="text-center">
                              <Icon name="ImagePlus" size={64} className="mx-auto text-gray-400 mb-4" />
                              <p className="text-gray-500">Изображение не загружено</p>
                            </div>
                          </div>
                        ) : (
                          <img 
                            src={artwork.image}
                            alt={artwork.title}
                            className="w-full h-full object-cover"
                          />
                        )}
                      </div>
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-3xl font-serif text-black mb-2">{artwork.title}</h2>
                          <p className="text-gray-600 leading-relaxed">{artwork.description}</p>
                        </div>
                        
                        <div className="space-y-2">
                          <p className="text-sm text-gray-500"><strong>Техника:</strong> {artwork.medium}</p>
                          <p className="text-sm text-gray-500"><strong>Размер:</strong> {artwork.size}</p>
                        </div>
                        
                        <div className="border-t pt-6">
                          <div className="flex items-center justify-between">
                            <span className="text-2xl font-medium text-black">
                              {artwork.priceFormatted}
                            </span>
                            {!artwork.isEmpty && (
                              <Button 
                                className="bg-black text-white hover:bg-gray-800 px-8 py-3"
                                onClick={() => addToCart(artwork)}
                              >
                                Добавить в корзину
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
                
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
                      {artwork.priceFormatted}
                    </span>
                    
                    {artwork.isEmpty ? (
                      <Button 
                        className="bg-gray-300 text-gray-600 px-6 py-2 text-sm font-medium cursor-not-allowed"
                        disabled
                      >
                        Загрузить
                      </Button>
                    ) : (
                      <Button 
                        className="bg-black text-white hover:bg-gray-800 px-6 py-2 text-sm font-medium"
                        onClick={() => addToCart(artwork)}
                      >
                        Купить
                      </Button>
                    )}
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
          <h2 className="text-3xl font-serif text-black mb-8 font-light animate-fade-in">
            О художнице
          </h2>
          
          <div className="prose prose-lg max-w-3xl mx-auto text-gray-700 leading-relaxed animate-fade-in">
            <p className="mb-6">
              Яна Арутюнова — художница, вдохновлённая морем, солнцем и бескрайними просторами Крыма. 
              Мои картины пропитаны солёным воздухом Севастополя, где каждый день начинается с шороха волн и аромата морского бриза.
            </p>
            
            <p className="mb-6">
              Моя жизнь — это постоянное путешествие между материнством, творчеством и поиском смыслов. 
              Крым стал для меня источником вдохновения, где каждая линия и каждый цвет отражают любовь к природе, морю и солнцу.
            </p>
            
            <p>
              Создавая свои произведения, я вкладываю в них частичку тепла крымского солнца и свежести морского ветра. 
              Каждая моя картина — это маленький кусочек лета, который будет согревать вас весь год, 
              возвращая в самые яркие и счастливые моменты.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center space-y-8">
            <h3 className="text-xl font-serif text-black font-medium">
              Связаться с художницей
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
                href="mailto:hello@yanaarutyunova.art" 
                className="flex items-center space-x-2 text-gray-600 hover:text-black transition-colors"
              >
                <Icon name="Mail" size={20} />
                <span>Email</span>
              </a>
            </div>
            
            <div className="text-center text-sm text-gray-500">
              <p>© 2024 Яна Арутюнова. Все права защищены.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}