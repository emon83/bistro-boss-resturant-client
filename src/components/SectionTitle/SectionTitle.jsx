const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="mt-20 sm:w-4/12 lg:w-3/12 mx-auto text-center">
            <p className="text-yellow-500 mb-4">{subHeading}</p>
            <h3 className="text-4xl uppercase border-y-4 py-4">{heading}</h3>
        </div>
    );
};

export default SectionTitle;