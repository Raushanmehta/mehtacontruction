
import { ScrollArea } from "../ui/scroll-area";
import { Separator } from "../ui/separator";

const ServiceMenu = () => {
  return (
    <ScrollArea className="bg-white backdrop-blur-xl shadow-2xl lg:h-auto w-full
    border border-white/10 sticky top-0 rounded-b-2xl overflow-hidden">
      <div className="flex flex-wrap text-sm ">
            jdsbfjdfj
            fd
            v
            f
            d
            gf
        {/* {categoryTwo[selectedCategory]?.map((parent, index) => (
          <div
            key={parent.categoryId}
            className={`p-6 lg:w-[20%] transition-colors duration-200 
            ${index % 2 === 0 ? "bg-white" : "bg-[#0081CD]/10"}`}
          >

           
            <p className="mb-4 font-semibold text-black">
              {parent.name}
            </p>

            <Separator className="mb-4" />

            
            <ul className="space-y-2">
              {childCategory(
                categoryThree[selectedCategory],
                parent.categoryId
              )?.map((child) => (
                <li
                  key={child.categoryId}
                  onClick={() => handleNavigate(child.categoryId)}
                  className="cursor-pointer text-black
                   hover:text-[#0081CD] transition-colors"
                >
                  {child.name}
                </li>
              ))}
            </ul>
          </div>
        ))} */}

      </div>
    </ScrollArea>
  );
};

export default ServiceMenu;