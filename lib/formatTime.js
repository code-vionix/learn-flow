export const formatEnrollmentDate = (dateString) => {
    const date = new Date(dateString);
    
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
  
    // Convert hours from 24-hour format to 12-hour format
    const formattedHours = hours % 12 || 12;
    // Add leading zero to minutes if necessary
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  
    // Adding the suffix for the day
    const suffix = (day === 1 || day === 21 || day === 31) ? 'st' :
                   (day === 2 || day === 22) ? 'nd' :
                   (day === 3 || day === 23) ? 'rd' : 'th';
    
    return `${day}${suffix} ${month}, ${year} at ${formattedHours}:${formattedMinutes} ${ampm}`;
}
