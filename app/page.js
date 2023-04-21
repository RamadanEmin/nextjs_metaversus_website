import { Navbar } from '../components';
import {
  About,
  Hero
} from '../sections';

const Page = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <Hero />
    <div className="relative">
      <About />
    </div>
  </div>
);

export default Page;
