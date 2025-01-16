export async function saveWorker(workerData) {
  try {
    const response = await fetch('/api/workers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(workerData)
    });

    if (response.ok) {
      return await response.json();
    } else {
      throw new Error('Respuesta no OK');
    }
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}