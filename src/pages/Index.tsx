import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Навигация */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b">
        <div className="container mx-auto flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <span className="bg-gradient-to-r from-violet-500 to-blue-500 w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold">
              У
            </span>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-blue-500">
              УчисьПро
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a
              href="#"
              className="font-medium text-slate-700 hover:text-violet-600 transition-colors"
            >
              Курсы
            </a>
            <a
              href="#"
              className="font-medium text-slate-700 hover:text-violet-600 transition-colors"
            >
              Преподаватели
            </a>
            <a
              href="#"
              className="font-medium text-slate-700 hover:text-violet-600 transition-colors"
            >
              Тарифы
            </a>
            <a
              href="#"
              className="font-medium text-slate-700 hover:text-violet-600 transition-colors"
            >
              Блог
            </a>
          </div>

          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              className="hidden md:flex gap-2 items-center text-slate-700 hover:text-violet-600 transition-colors"
            >
              <Icon name="Search" size={18} />
              Поиск
            </Button>
            <Button variant="outline" className="hidden sm:flex">
              Войти
            </Button>
            <Button className="bg-gradient-to-r from-violet-600 to-blue-500 text-white hover:from-violet-700 hover:to-blue-600">
              Начать обучение
            </Button>
          </div>
        </div>
      </nav>

      {/* Герой-секция */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div
              className={`flex-1 space-y-6 transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <Badge className="bg-violet-100 text-violet-700 hover:bg-violet-100 px-3 py-1 text-sm">
                Новая платформа
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Образование, которое{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-blue-500">
                  меняет жизнь
                </span>
              </h1>
              <p className="text-lg text-slate-600 max-w-xl">
                Изучайте актуальные навыки под руководством экспертов. Выбирайте
                из сотен курсов, доступных в любое время.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button className="bg-gradient-to-r from-violet-600 to-blue-500 text-white hover:from-violet-700 hover:to-blue-600 h-12 px-6 text-base">
                  Выбрать курс
                </Button>
                <Button variant="outline" className="gap-2 h-12 px-6 text-base">
                  <Icon name="PlayCircle" size={20} />
                  Как это работает
                </Button>
              </div>
              <div className="flex items-center gap-4 pt-6">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <Avatar key={i} className="border-2 border-white w-8 h-8">
                      <AvatarImage
                        src={`https://i.pravatar.cc/100?img=${i + 10}`}
                      />
                      <AvatarFallback>СТ</AvatarFallback>
                    </Avatar>
                  ))}
                </div>
                <div className="text-sm">
                  <span className="font-semibold">1,240+</span> студентов уже
                  обучаются
                </div>
              </div>
            </div>
            <div
              className={`flex-1 transform transition-all duration-1000 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-64 h-64 bg-blue-200 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
                <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-violet-200 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
                <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                  alt="Образовательная платформа"
                  className="relative z-10 rounded-xl shadow-xl w-full object-cover"
                />
                <div className="absolute -bottom-5 left-10 bg-white rounded-lg shadow-lg p-4 z-20 flex items-center gap-3">
                  <div className="bg-green-500 text-white p-2 rounded-lg">
                    <Icon name="TrendingUp" size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Онлайн посетителей</p>
                    <p className="text-lg font-semibold">1,253</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Популярные категории */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 mb-4">
              Категории
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Популярные направления
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Выбирайте из разнообразных категорий, созданных с учетом
              актуальных требований рынка и потребностей учащихся
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[
              {
                title: "Программирование",
                icon: "CodeXml",
                color: "bg-blue-500",
                count: 42,
              },
              {
                title: "Дизайн и UX",
                icon: "Palette",
                color: "bg-purple-500",
                count: 38,
              },
              {
                title: "Маркетинг",
                icon: "BarChart3",
                color: "bg-orange-500",
                count: 26,
              },
              {
                title: "Бизнес",
                icon: "Briefcase",
                color: "bg-green-500",
                count: 35,
              },
              {
                title: "Аналитика данных",
                icon: "LineChart",
                color: "bg-indigo-500",
                count: 29,
              },
              {
                title: "Искусственный интеллект",
                icon: "BrainCircuit",
                color: "bg-red-500",
                count: 18,
              },
              {
                title: "Soft Skills",
                icon: "Users",
                color: "bg-teal-500",
                count: 23,
              },
              {
                title: "Иностранные языки",
                icon: "Languages",
                color: "bg-amber-500",
                count: 31,
              },
            ].map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 hover:shadow-md transition-all hover:-translate-y-1 cursor-pointer group"
              >
                <div
                  className={`${category.color} text-white w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <Icon name={category.icon} size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{category.title}</h3>
                <p className="text-slate-500 text-sm">
                  {category.count} курсов
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Популярные курсы */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div>
              <Badge className="bg-violet-100 text-violet-700 hover:bg-violet-100 mb-4">
                Топ-курсы
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Популярные курсы
              </h2>
              <p className="text-slate-600 max-w-2xl">
                Выбирайте из лучших курсов, которые уже помогли тысячам
                студентов освоить новые навыки
              </p>
            </div>
            <Button variant="outline" className="mt-4 md:mt-0">
              Все курсы
              <Icon name="ArrowRight" size={16} className="ml-2" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Основы Python для анализа данных",
                instructor: "Алексей Петров",
                instructorAvatar: "https://i.pravatar.cc/100?img=11",
                rating: 4.8,
                reviews: 342,
                price: 12900,
                originalPrice: 16900,
                level: "Начинающий",
                category: "Программирование",
                image:
                  "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1631&q=80",
              },
              {
                title: "UI/UX дизайн с нуля до PRO",
                instructor: "Мария Иванова",
                instructorAvatar: "https://i.pravatar.cc/100?img=5",
                rating: 4.9,
                reviews: 517,
                price: 15900,
                originalPrice: 19900,
                level: "Любой",
                category: "Дизайн",
                image:
                  "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
              },
              {
                title: "Таргетированная реклама в Instagram и Facebook",
                instructor: "Дмитрий Соколов",
                instructorAvatar: "https://i.pravatar.cc/100?img=12",
                rating: 4.7,
                reviews: 289,
                price: 9900,
                originalPrice: 13900,
                level: "Средний",
                category: "Маркетинг",
                image:
                  "https://images.unsplash.com/photo-1611926653458-09294b3142bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
              },
            ].map((course, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <Badge className="absolute top-4 left-4 bg-white text-violet-700">
                    {course.category}
                  </Badge>
                  <Badge className="absolute top-4 right-4 bg-yellow-400 text-yellow-900">
                    Хит продаж
                  </Badge>
                </div>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <Badge
                      variant="outline"
                      className="bg-blue-50 text-blue-700 border-blue-200"
                    >
                      {course.level}
                    </Badge>
                    <div className="flex items-center">
                      <Icon name="Star" size={16} className="text-yellow-400" />
                      <span className="ml-1 font-medium">{course.rating}</span>
                      <span className="text-slate-500 text-sm ml-1">
                        ({course.reviews})
                      </span>
                    </div>
                  </div>
                  <CardTitle className="text-xl mt-2 group-hover:text-violet-600 transition-colors">
                    {course.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center mb-4">
                    <Avatar className="h-8 w-8 mr-2">
                      <AvatarImage src={course.instructorAvatar} />
                      <AvatarFallback>ИП</AvatarFallback>
                    </Avatar>
                    <span className="text-sm text-slate-600">
                      {course.instructor}
                    </span>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between border-t pt-4">
                  <div>
                    <p className="font-bold text-lg">
                      {course.price.toLocaleString()} ₽
                    </p>
                    <p className="text-sm text-slate-500 line-through">
                      {course.originalPrice.toLocaleString()} ₽
                    </p>
                  </div>
                  <Button
                    size="sm"
                    className="bg-violet-600 hover:bg-violet-700 text-white"
                  >
                    Подробнее
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-green-100 text-green-700 hover:bg-green-100 mb-4">
              Преимущества
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Почему выбирают нас
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Наша образовательная платформа объединяет современные технологии и
              лучших преподавателей
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Эксперты-практики",
                description:
                  "Наши преподаватели — ведущие специалисты своих отраслей с многолетним опытом работы",
                icon: "Users",
                color: "bg-blue-100 text-blue-700",
              },
              {
                title: "Актуальные программы",
                description:
                  "Программы курсов постоянно обновляются и содержат только актуальные материалы",
                icon: "BookOpen",
                color: "bg-violet-100 text-violet-700",
              },
              {
                title: "Персональный подход",
                description:
                  "Индивидуальная поддержка и обратная связь от преподавателей на протяжении всего обучения",
                icon: "UserCheck",
                color: "bg-green-100 text-green-700",
              },
              {
                title: "Сертификация",
                description:
                  "По окончании каждого курса вы получаете сертификат, подтверждающий ваши навыки",
                icon: "Award",
                color: "bg-amber-100 text-amber-700",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
              >
                <div
                  className={`${feature.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}
                >
                  <Icon name={feature.icon} size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Отзывы */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-amber-100 text-amber-700 hover:bg-amber-100 mb-4">
              Отзывы
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Что говорят студенты
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Более 10,000 студентов уже оценили качество наших курсов и
              преподавания
            </p>
          </div>

          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {[
                {
                  name: "Анна Смирнова",
                  position: "UX/UI Дизайнер",
                  company: "Креатив Дизайн",
                  avatar: "https://i.pravatar.cc/100?img=32",
                  text: "Курс по UI/UX дизайну превзошел все мои ожидания. Очень структурированная программа, много практики и полезных инсайтов от преподавателя. За 2 месяца я смогла значительно прокачать свои навыки и уже получила первый заказ.",
                },
                {
                  name: "Игорь Волков",
                  position: "Front-end разработчик",
                  company: "ТехноЛаб",
                  avatar: "https://i.pravatar.cc/100?img=53",
                  text: "Благодаря курсу по React я наконец-то разобрался со всеми хуками и контекстом. Преподаватель очень доступно объясняет сложные вещи и всегда готов помочь. Сразу после курса я смог пройти техническое собеседование в крупную IT-компанию.",
                },
                {
                  name: "Елена Петрова",
                  position: "Маркетолог",
                  company: "Digital Media",
                  avatar: "https://i.pravatar.cc/100?img=25",
                  text: "Курс по таргетированной рекламе очень помог мне в работе. Практические кейсы, актуальные стратегии и инструменты — всё это я сразу применила на практике. За первый месяц после курса увеличила конверсию рекламных кампаний на 37%.",
                },
              ].map((testimonial, index) => (
                <CarouselItem key={index}>
                  <Card className="border-0 shadow-none bg-slate-50 p-6">
                    <CardContent className="p-0 mb-6">
                      <div className="flex items-center gap-1 text-yellow-400 mb-4">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Icon key={star} name="Star" size={20} />
                        ))}
                      </div>
                      <p className="text-slate-700 italic">
                        "{testimonial.text}"
                      </p>
                    </CardContent>
                    <CardFooter className="p-0 flex items-center gap-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={testimonial.avatar} />
                        <AvatarFallback>
                          {testimonial.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-sm text-slate-500">
                          {testimonial.position}, {testimonial.company}
                        </p>
                      </div>
                    </CardFooter>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8 gap-2">
              <CarouselPrevious className="relative inset-auto border-violet-200 hover:bg-violet-100 hover:text-violet-700" />
              <CarouselNext className="relative inset-auto border-violet-200 hover:bg-violet-100 hover:text-violet-700" />
            </div>
          </Carousel>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-violet-600 to-blue-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <Badge className="bg-white/20 text-white hover:bg-white/30 mb-6">
            Начните обучение сегодня
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 max-w-2xl mx-auto">
            Готовы сделать шаг к новым знаниям и возможностям?
          </h2>
          <p className="max-w-xl mx-auto mb-8 text-white/80">
            Присоединяйтесь к тысячам студентов, которые уже изменили свою жизнь
            с нашей образовательной платформой
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="bg-white text-violet-700 hover:bg-white/90 h-12 px-6 text-base"
              size="lg"
            >
              Начать обучение
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white/10 h-12 px-6 text-base"
              size="lg"
            >
              Посмотреть все курсы
            </Button>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-slate-900 text-slate-300 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-gradient-to-r from-violet-500 to-blue-500 w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold">
                  У
                </span>
                <span className="text-xl font-bold text-white">УчисьПро</span>
              </div>
              <p className="mb-6 text-slate-400 max-w-md">
                Образовательная платформа, которая помогает людям получать
                актуальные знания и навыки для профессионального роста.
              </p>
              <div className="flex gap-4">
                {["Facebook", "Instagram", "Twitter", "Youtube"].map(
                  (social, i) => (
                    <a
                      key={i}
                      href="#"
                      className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-violet-600 transition-colors"
                    >
                      <Icon
                        name={social}
                        size={18}
                        className="text-white"
                        fallback="Share"
                      />
                    </a>
                  ),
                )}
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4 text-lg">Курсы</h3>
              <ul className="space-y-3">
                {[
                  "Программирование",
                  "Дизайн",
                  "Маркетинг",
                  "Бизнес",
                  "Аналитика данных",
                ].map((item, i) => (
                  <li key={i}>
                    <a href="#" className="hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4 text-lg">
                Компания
              </h3>
              <ul className="space-y-3">
                {["О нас", "Преподаватели", "Карьера", "Блог", "Контакты"].map(
                  (item, i) => (
                    <li key={i}>
                      <a
                        href="#"
                        className="hover:text-white transition-colors"
                      >
                        {item}
                      </a>
                    </li>
                  ),
                )}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4 text-lg">
                Поддержка
              </h3>
              <ul className="space-y-3">
                {[
                  "FAQ",
                  "Помощь",
                  "Политика конфиденциальности",
                  "Условия использования",
                ].map((item, i) => (
                  <li key={i}>
                    <a href="#" className="hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-500">
              © 2025 УчисьПро. Все права защищены.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="text-slate-500 hover:text-white">
                Политика конфиденциальности
              </a>
              <a href="#" className="text-slate-500 hover:text-white">
                Условия использования
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
