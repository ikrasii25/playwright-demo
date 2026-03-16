import { test, expect } from '@playwright/test';

test('Create post API', async ({ request }) => {

  const response = await request.post(
    'https://jsonplaceholder.typicode.com/posts',
    {
      data: {
        title: 'QA automation',
        body: 'Playwright API test',
        userId: 1
      }
    }
  );

  expect(response.status()).toBe(201);

  const body = await response.json();

  expect(body.title).toBe('QA automation');
  expect(body.userId).toBe(1);
});



test('Get post API', async ({ request }) => {

  const response = await request.get(
    'https://jsonplaceholder.typicode.com/posts/1'
  );

  expect(response.status()).toBe(200);

  const body = await response.json();

  expect(body.id).toBe(1);
});


test('Create booking', async ({ request }) => {

  const response = await request.post(
    'https://restful-booker.herokuapp.com/booking',
    {
      data: {
        firstname: 'Iryna',
        lastname: 'QA',
        totalprice: 111,
        depositpaid: true,
        bookingdates: {
          checkin: '2025-01-01',
          checkout: '2025-01-10'
        },
        additionalneeds: 'Breakfast'
      }
    }
  );

  expect(response.status()).toBe(200);

  const body = await response.json();

  expect(body.booking.firstname).toBe('Iryna');
});