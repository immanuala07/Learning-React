const CartIcon = () => {
    return (
        <svg
            // The namespace can be defined by an xmlns attribute in the start tag of an element.
            // The purpose of using an URI is to give the namespace a unique name.
            xmlns='http://www.w3.org/2000/svg'

            // It is used to scale the SVG element that means we can set the coordinates as well as width and height.
            // viewBox = "min-x min-y width height"
            // viewBox='0 0 20 20'
            // viewbox is not working here

            width="28"
            height="18"

            // The fill attribute can be used in two things.
            // For shapes and text, it’ s a presentation attribute that defines the color used to paint the element.
            // For animation it defines the final state of the animation.
            fill='currentColor'
        >
            {/* The <path> element is used to define a path. */}
            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
        </svg>
    );
};

export default CartIcon;
