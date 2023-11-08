
import { Accordion } from 'flowbite-react';

const Faq = () => {
    return (
        <div>

    <Accordion>
      <Accordion.Panel>
        <Accordion.Title>How can I add a food item for donation?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          On the website, go to the "Add Food" page, fill in the details of the food item you wish to donate, and submit the form.
          </p>
          
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>How do I mark a food item as 'delivered'?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          In the 'Manage Food' section, select the food item and click on the 'Mark as Delivered' button. This will change the status of the food to 'delivered'
          </p>
          
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>How can I request food from donors?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          Find the food item you're interested in and click on the 'Request' button. This will send a request to the donor.
          </p>
          
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title> Is there a limit to the number of food items I can donate or request?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          No, there's no specific limit. Donors can contribute multiple food items, and requesters can ask for various items they need.
          </p>
         
          
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>

        </div>
    );
};

export default Faq;