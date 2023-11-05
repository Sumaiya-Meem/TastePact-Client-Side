import { Footer } from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
import logo from "../../assets/logo.webp"

const Footers = () => {
    return (
        <div className='mt-5'>
    <Footer container>
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <Footer.Brand
              href="/"
              src={logo}
              alt="Flowbite Logo"
              name="HarvestSwap"
              className='ml-24 mt-10'
            />
          </div>
          <div className="flex gap-10 sm:mt-2  ">
            <div>
              <Footer.Title title="Address" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">28 , Islam Centre, Mirpur, Dhaka</Footer.Link>
                <Footer.Link href="#">Email: harvestswap@gmail.com</Footer.Link>
                <Footer.Link href="#">Helpline: 0123291315</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
            
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="HarvestSwap™" year={2023} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  
        </div>
    );
};

export default Footers;