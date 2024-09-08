import { Toaster, toast } from "sonner";

export function Messager() {
  const handleClick = (event) => {
    console.log("click");
    //event.preventDefault()
    const content = event.target.textContent;
    navigator.clipboard.writeText(
      content.replace(" AT ", "@").replace(" DOT ", ".")
    );
    toast.success("Email copied to clipboard!", {
      type: "success",
      duration: 3000,
    });
  };

  return (
    <>
      <Toaster position='bottom-left' visibleToasts={1} />
      <div
        id='contact-data'
        onClick={(e) => handleClick(e)}
        className='select-none flex md:flex-wrap items-center mt-3 text-sm font-medium text-white/90 justify-center md:justify-start hover:underline cursor-pointer'>
        alemarti AT uji DOT es
      </div>
    </>
  );
}
