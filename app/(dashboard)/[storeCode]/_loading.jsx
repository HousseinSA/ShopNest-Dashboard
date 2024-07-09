import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box'
import CardHead from '@/components/Dashboard/CardHead'
import { Separator } from '@/components/ui/separator'
import SectionHeader from '@/components/globals/storeHead/SectionHeader'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Overview from '@/components/Dashboard/overview'


const LoadingSkeleton = () => {
  return (
    // <Box sx={{ width: 300 }}>
    //   <Skeleton variant="text" />
    //   <Skeleton variant="circular" width={40} height={40} />
    //   <Skeleton variant="rectangular" width={300} height={118} />
    // </Box>
    <div className='flex-col'>
      <div className='flex-1 space-y-4 p-8 pt-6'>
        <SectionHeader title='Dashboard' description='Your store overview ' />
        <Separator />
        <div className='grid gap-4 grid-cols-3'>
          <Card>
            <CardHead  title='Total Revenue' />
            <CardContent>
              <div className='text-2xl font-bold skeleton skeleton-text'></div>
            </CardContent>
          </Card>
          <Card>
            <CardHead title='Sales' />
            <CardContent>
              <div className='text-2xl font-bold skeleton skeleton-text'></div>
            </CardContent>
          </Card>
          <Card>
            <CardHead title='Products in stuck' />
            <CardContent>
              <div className='text-2xl font-bold'></div>
            </CardContent>
          </Card>
        </div>
        <Card className='col-span-4'>
          <CardHead title='Overview' />
          <CardContent className='pl-2'>
            <Overview  />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LoadingSkeleton;
