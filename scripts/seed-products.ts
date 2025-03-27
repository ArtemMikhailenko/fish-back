// seed-products.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from '../src/app.module';
import { ProductsService } from '../src/products/products.service';
import { UploadsService } from '../src/uploads/uploads.service';
import { CreateProductDto } from '../src/products/dto/create-product.dto';

async function bootstrap() {
  // Создаём приложение в режиме ApplicationContext (без HTTP-сервера)
  const appContext = await NestFactory.createApplicationContext(AppModule);

  // Получаем необходимые сервисы
  const productsService = appContext.get(ProductsService);
  const uploadsService = appContext.get(UploadsService);

  // Массив товаров с данными и локальными путями к файлам
  const productsData: Array<{ dto: CreateProductDto; localPath: string }> = [
    {
      dto: {
        title: 'Икра горбуши',
        saleBadge: 'АКЦИЯ 1+1=3',
        netWeight: '0.5 кг',
        price: 1100,    // ~ 499 UAH => ~1100 RUB
        oldPrice: 1760, // ~ 800 UAH => ~1760 RUB
        composition: 'Состав: икра горбуши, соль, масло',
        packaging: 'Тара: стекло',
        color: 'Цвет: ярко-оранжевый',
        dimension: 'Размер икринок: 4 мм в диаметре',
        consistency: 'Консистенция: сухая. Не более 5-7% жидкости',
        shelfLife: 'Срок годности: 4 месяца в закрытом виде',
      },
      localPath: './public/images/ct1.webp',
    },
    {
      dto: {
        title: 'Икра лосося',
        saleBadge: 'АКЦИЯ 1+1=3',
        netWeight: '0.5 кг',
        price: 1200,    // ~ 549 UAH => ~1200 RUB
        oldPrice: 1980, // ~ 900 UAH => ~1980 RUB
        composition: 'Состав: икра лосося, соль, масло',
        packaging: 'Тара: стекло',
        color: 'Цвет: ярко-оранжевый',
        dimension: 'Размер икринок: 4 мм в диаметре',
        consistency: 'Консистенция: сухая. Не более 5-7% жидкости',
        shelfLife: 'Срок годности: 4 месяца в закрытом виде',
      },
      localPath: './public/images/ct2.webp',
    },
    {
      dto: {
        title: 'Икра кеты',
        saleBadge: 'АКЦИЯ 1+1=3',
        netWeight: '0.5 кг',
        price: 1200,    // ~ 549 UAH => ~1200 RUB
        oldPrice: 2250, // ~1025 UAH => ~2250 RUB
        composition: 'Состав: икра кеты, соль, масло',
        packaging: 'Тара: стекло',
        color: 'Цвет: ярко-оранжевый',
        dimension: 'Размер икринок: 4 мм в диаметре',
        consistency: 'Консистенция: сухая. Не более 5-7% жидкости',
        shelfLife: 'Срок годности: 4 месяца в закрытом виде',
      },
      localPath: './public/images/ct3.webp',
    },
    {
      dto: {
        title: 'Икра форели',
        saleBadge: 'АКЦИЯ 1+1=3',
        netWeight: '0.5 кг',
        price: 1200,    // ~ 549 UAH => ~1200 RUB
        oldPrice: 2420, // ~1100 UAH => ~2420 RUB
        composition: 'Состав: икра форели, соль, масло',
        packaging: 'Тара: стекло',
        color: 'Цвет: ярко-оранжевый',
        dimension: 'Размер икринок: 4 мм в диаметре',
        consistency: 'Консистенция: сухая. Не более 5-7% жидкости',
        shelfLife: 'Срок годности: 4 месяца в закрытом виде',
      },
      localPath: './public/images/ct4.webp',
    },
    {
      dto: {
        title: 'Икра чавычи',
        saleBadge: 'АКЦИЯ 1+1=3',
        netWeight: '0.5 кг',
        price: 1320,    // ~ 599 UAH => ~1320 RUB
        oldPrice: 2420, // ~1100 UAH => ~2420 RUB
        composition: 'Состав: икра чавычи, соль, масло',
        packaging: 'Тара: стекло',
        color: 'Цвет: ярко-оранжевый',
        dimension: 'Размер икринок: 4 мм в диаметре',
        consistency: 'Консистенция: сухая. Не более 5-7% жидкости',
        shelfLife: 'Срок годности: 4 месяца в закрытом виде',
      },
      localPath: './public/images/ct5.webp',
    },
    {
      dto: {
        title: 'Икра веслоноса',
        saleBadge: 'АКЦИЯ 1+1=3',
        netWeight: '0.5 кг',
        price: 1540,    // ~ 699 UAH => ~1540 RUB
        oldPrice: 3540, // ~1610 UAH => ~3540 RUB
        composition: 'Состав: икра веслоноса, соль, масло',
        packaging: 'Тара: стекло',
        color: 'Цвет: ярко-оранжевый',
        dimension: 'Размер икринок: 4 мм в диаметре',
        consistency: 'Консистенция: сухая. Не более 5-7% жидкости',
        shelfLife: 'Срок годности: 4 месяца в закрытом виде',
      },
      localPath: './public/images/ct6.webp',
    },
    {
      dto: {
        title: 'Икра щуки',
        saleBadge: 'АКЦИЯ 1+1=3',
        netWeight: '0.5 кг',
        price: 1320,    // ~ 599 UAH => ~1320 RUB
        oldPrice: 1980, // ~ 900 UAH => ~1980 RUB
        composition: 'Состав: икра щуки, соль, масло',
        packaging: 'Тара: стекло',
        color: 'Цвет: ярко-оранжевый',
        dimension: 'Размер икринок: 4 мм в диаметре',
        consistency: 'Консистенция: сухая. Не более 5-7% жидкости',
        shelfLife: 'Срок годности: 4 месяца в закрытом виде',
      },
      localPath: './public/images/ct7.webp',
    },
    {
      dto: {
        title: 'Икра гольца',
        saleBadge: 'АКЦИЯ 1+1=3',
        netWeight: '0.5 кг',
        price: 1540,    // ~ 699 UAH => ~1540 RUB
        oldPrice: 2310, // ~1050 UAH => ~2310 RUB
        composition: 'Состав: икра гольца, соль, масло',
        packaging: 'Тара: стекло',
        color: 'Цвет: ярко-оранжевый',
        dimension: 'Размер икринок: 4 мм в диаметре',
        consistency: 'Консистенция: сухая. Не более 5-7% жидкости',
        shelfLife: 'Срок годности: 4 месяца в закрытом виде',
      },
      localPath: './public/images/ct8.webp',
    },
  ];

  try {
    for (const productItem of productsData) {
      // Загружаем локальный файл на Cloudinary
      const uploadResult = await uploadsService.uploadToCloudinary(productItem.localPath);
      // Присваиваем полученный URL в поле image DTO
      productItem.dto.image = uploadResult.url;
      
      const created = await productsService.create(productItem.dto);
      console.log(`Создан товар: ${created.title}, ID: ${(created as any)._id}`);
    }
    console.log('Все товары добавлены!');
  } catch (error) {
    console.error('Ошибка при добавлении товаров:', error);
  } finally {
    await appContext.close();
    process.exit(0);
  }
}

bootstrap();
