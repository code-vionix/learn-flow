'use server';

import axios from 'axios';

export async function sendResetEmail(formData) {
  const email = formData.get('email');

  if (!email) {
    return { success: false, message: 'Email is required' };
  }

  try {
    const res = await axios.post(`${process.env.NEXT_PUBLIC_API_ROUTE_URL}/password/reset`, {
      email,
    });

    return { success: true, message: res.data.message || 'Reset code sent' };
  } catch (err) {
    return {
      success: false,
      message: err?.response?.data?.message || 'Something went wrong',
    };
  }
}
