<?php

namespace Wallet\ApiBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;

/**
 * Class UserController
 *
 * @Route("/user")
 *
 * @package Wallet\ApiBundle\Controller
 */
class UserController extends Controller
{
    /**
     * Create new user request
     *
     * @Route("/")
     * @Method({"POST"})
     */
    public function createUserAction(Request $request)
    {
        exit('Hi');
    }

    /**
     * Authenticate user with login and password
     *
     * @Route("/auth")
     * @Method({"POST"})
     */
    public function authenticateUserAction(Request $request)
    {
        exit(__METHOD__);
    }

    /**
     * Get user data by user id
     *
     * @Route("/{id}", requirements={"id" = "\d+"}, defaults={"id" = 1})
     * @Method({"GET"})
     */
    public function getUserByIdAction($id, Request $request)
    {
        exit(__METHOD__);
    }
}
