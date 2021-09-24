import meat from '../assets/empanadas/meat.jpeg';
import champignon from '../assets/empanadas/champignon.jpeg';
import fourCheese from '../assets/empanadas/four-cheese.jpeg';
import roquefort from '../assets/empanadas/roquefort.jpeg';
import cheeseOnion from '../assets/empanadas/cheese-onion.jpeg';
import aphrodisiac from '../assets/empanadas/aphrodisiac.jpeg';

const menuItems = [
  {
    id: 'item1',
    image: meat,
    name: 'Meat',
    description:
      'Minced meat, white onion, green onion, peppers, and hard-boiled egg.',
    price: 1.17,
  },
  {
    id: 'item2',
    image: champignon,
    name: 'Champignon',
    description:
      'Mozzarella, champignon, butter, onion, cream, garlic, and parsley.',
    price: 1.22,
  },
  {
    id: 'item3',
    image: fourCheese,
    name: 'Four Cheese',
    description: 'Muzzarella, roquefort, provolone, and fontina.',
    price: 1.55,
  },
  {
    id: 'item4',
    image: roquefort,
    name: 'Roquefort',
    description: 'Mozzarella, roquefort, and milk cream.',
    price: 1.37,
  },
  {
    id: 'item5',
    image: cheeseOnion,
    name: 'Cheese and Onion',
    description: 'Mozzarella, and onion.',
    price: 1.12,
  },
  {
    id: 'item6',
    image: aphrodisiac,
    name: 'Aphrodisiac',
    description: 'Mozzarella, roquefort, celery, and walnut.',
    price: 1.28,
  },
];

export default menuItems;
