
const WatchingCourseWrapper = ({ children, className }) => {
    return (
        <div className={`mx-auto max-w-screen-2xl m-auto px-4 sm:px-6 lg:px-8 ${className}`}>
            {children}
        </div>
    );
};

export default WatchingCourseWrapper;