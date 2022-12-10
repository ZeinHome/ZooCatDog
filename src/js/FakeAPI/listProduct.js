import dog from '../../images/listproduct/dog.svg';
import cat from '../../images/listproduct/cat.svg';
import fish from '../../images/listproduct/fish.svg';
import bird from '../../images/listproduct/bird.svg';
import rat from '../../images/listproduct/rat.svg';
import chameleon from '../../images/listproduct/chameleon.svg';
import megaphone from '../../images/listproduct/megaphone.svg';

export const listProduct = [
  {
    id: 1,
    image: dog,
    text: 'Собаки',
    additionally: [
      {
        idA: 50,
        name: 'Сухой корм',
        additionallyTwo: [
          { idB: 95, name: 'Бош (Bosch)' },
          { idB: 96, name: 'Овен Бакед Традишн (Oven-Baked Tradition)' },
          {
            idB: 97,
            name: 'Панзи (Panzi)',
          },
          { idB: 98, name: 'Роял Канин (Royal Canin)' },
          {
            idB: 99,
            name: 'Йозера (Josera)',
          },
          { idB: 100, name: 'Пурина Про План (Purina Pro Plan)' },
          { idB: 101, name: 'Клуб 4 Лапы (Club 4 Paws)' },
          { idB: 102, name: 'Пан Пес' },
          { idB: 103, name: 'Оптимил (Optimeal)' },
        ],
      },
      { idA: 51, name: 'Влажный корм (консервы и паучи)' },
      {
        idA: 52,
        name: 'Поводок-рулетка Флекси (Flexie), Германия',
      },
      { idA: 53, name: 'Лакомства' },
      {
        idA: 54,
        name: 'Аксессуары для улицы (выгула) и автомобиля',
      },
      { idA: 55, name: 'Аксессуары и средства для дома' },
      { idA: 56, name: 'Спальное место' },
      { idA: 57, name: 'Игрушки для собак' },
      { idA: 58, name: 'Гигиена и уход за собакой' },
    ],
  },
  {
    id: 2,
    image: cat,
    text: 'Кошки',
    additionally: [
      { idA: 59, name: 'Сухой корм' },
      { idA: 61, name: 'Сухие корма на развес' },
      { idA: 60, name: 'Консервы (консервы и паучи)' },
      { idA: 62, name: 'Лакомства' },
      { idA: 63, name: 'Аксессуары для улицы и автомобиля' },
      { idA: 64, name: 'Спальное место' },
      { idA: 65, name: 'Игровые комплексы и когтеточки' },
      { idA: 66, name: 'Аксессуары и средства для дома' },
      { idA: 67, name: 'Гигиена и уход за кошкой' },
    ],
  },
  {
    id: 3,
    image: fish,
    text: 'Рыбки',
    additionally: [
      { idA: 68, name: 'Корм для рыб' },
      { idA: 69, name: 'Аквариумы и крышки для аквариумов' },
      { idA: 70, name: 'Декор для аквариума природный и искусственный' },
      { idA: 71, name: 'Фильтры, биофильтры и турбо головки' },
      { idA: 72, name: 'Терморегуляторы и стерилизаторы' },
      {
        idA: 73,
        name: 'Компрессоры и помпы для маленьких/домашних аквариумов',
      },
      { idA: 74, name: 'Компрессоры и помпы для прудов и больших резервуаров' },
      { idA: 75, name: 'Разное (освещение, грунт, растения)' },
    ],
  },
  {
    id: 4,
    image: bird,
    text: 'Птицы',
    additionally: [
      { idA: 76, name: 'Корм для попугаев, канареек и тропических птиц' },
      { idA: 77, name: 'Лакомства для птиц' },
      { idA: 78, name: 'Клетки и переноски для птиц' },
      { idA: 79, name: 'Кормушки и поилки' },
      { idA: 80, name: 'Игрушки и аксессуары для птиц' },
      {
        idA: 81,
        name: 'Наполнители для клеток',
      },
      { idA: 82, name: 'Витамины, подкормки и ветпрепараты' },
      { idA: 83, name: 'Средства по уходу' },
      { idA: 84, name: 'Разное (лампы и другое)' },
    ],
  },
  {
    id: 5,
    image: rat,
    text: 'Грызуны',
    additionally: [
      { idA: 85, name: 'Корм для кроликов, шиншилл и других грызунов' },
      { idA: 86, name: 'Лакомства для крыс, мышей и других питомцев' },
      { idA: 87, name: 'Клетки, переноски и вольеры' },
      { idA: 88, name: 'Туалеты и наполнители для клетки' },
      { idA: 89, name: 'Туалеты и наполнители для клетки' },
      {
        idA: 90,
        name: 'Средства по уходу',
      },
    ],
  },
  {
    id: 6,
    image: chameleon,
    text: 'Рептилии',
    additionally: [
      { idA: 91, name: 'Корм для рептилий' },
      { idA: 92, name: 'Лекарства и витамины' },
      { idA: 93, name: 'Террариумы, декорации для террариума' },
      { idA: 94, name: 'Разное (лампы, гигрометры, грунт)' },
    ],
  },
  { id: 7, image: megaphone, text: 'Акция' },
];
