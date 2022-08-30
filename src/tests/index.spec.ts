import supertest from 'supertest';
import app from '../server';
import path from 'path';
import sharp from 'sharp';

// create a request object
const request = supertest(app);

// test resize request with name without width and height
describe('Test endpoint response', () => {
  it('Status Codes tests', async () => {
    const response = await request.get(
      '/api/images?filename=hn&width=500&height=500'
    );
    expect(response.status).toBe(200);
  });
  //check all query params
  it('should enter width if undefined', async () => {
    const response = await request.get(
      '/api/images?filename=hn&width=lo&height=45'
    );
    expect(response.status).toBe(404);
  });

  //check all query params
  it('should enter height if undefined', async () => {
    const response = await request.get('/api/images?filename=ffffh&width=500&');
    expect(response.status).toBe(404);
  });
  //check all query params
  it('should enter filename if undefined', async () => {
    const response = await request.get('/api/images?&width=500&height=41');
    expect(response.status).toBe(404);
  });
});

// test resizing image

describe('Test endpoint response', () => {
  it('test resizing image', async () => {
    //start test
    await request.get('/api/images?filename=hn&width=500&height=41');
    // resizeImage(request:,response)
    expect(async () => {
      await sharp(`${path.resolve('./')}/assets/images/$hn.png`).resize(
        500,
        41
      );
    }).not.toThrow();
  });
});
